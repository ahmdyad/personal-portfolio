import { NextResponse } from "next/server"

const RECIPIENT_EMAIL = "ahmdziyad24@gmail.com"
const MAX_NAME_LENGTH = 120
const MAX_SUBJECT_LENGTH = 200
const MAX_MESSAGE_LENGTH = 10_000

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.replace(/\0/g, "").trim().slice(0, maxLength) : ""
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    }

    return entities[character]
  })
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form is not configured: RESEND_API_KEY is missing.")
    return NextResponse.json({ error: "The contact form is temporarily unavailable." }, { status: 503 })
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const data = payload as Record<string, unknown>
  // Quietly accept bot submissions without forwarding them to the inbox.
  if (cleanText(data.website, 200)) {
    return NextResponse.json({ ok: true })
  }

  const name = cleanText(data.name, MAX_NAME_LENGTH)
  const email = cleanText(data.email, 254).toLowerCase()
  const subject = cleanText(data.subject, MAX_SUBJECT_LENGTH) || "Portfolio contact message"
  const message = cleanText(data.message, MAX_MESSAGE_LENGTH)

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 })
  }

  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>"
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [RECIPIENT_EMAIL],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    }),
  })

  if (!response.ok) {
    console.error("Resend contact-form delivery failed:", await response.text())
    return NextResponse.json({ error: "Unable to send your message. Please try again later." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
