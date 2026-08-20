"use client"

import * as React from "react"
import { Send, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const RECIPIENT_EMAIL = "ahmdziyad24@gmail.com"
const RECIPIENT_NAME = "Ahmad Ziyad"

const topics = [
  { value: "freelance", label: "Freelance project" },
  { value: "collaboration", label: "Collaboration" },
  { value: "hi", label: "Just saying hi" },
]

const DEFAULT_BODY = "Hi Ahmad,\n\n"

export function EmailComposerDialog({
  children,
}: {
  children: React.ReactElement
}) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [subject, setSubject] = React.useState("")
  const [topic, setTopic] = React.useState<string[]>([])
  const [body, setBody] = React.useState(DEFAULT_BODY)
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState("")

  function handleTopicChange(value: string[]) {
    setTopic(value)
    const selected = topics.find((t) => t.value === value[0])
    if (selected && !subject) {
      setSubject(selected.label)
    }
  }

  async function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message: body }),
      })
      const result = (await response.json()) as { error?: string }

      if (!response.ok) throw new Error(result.error || "Unable to send your message.")

      setStatus("success")
      setName("")
      setEmail("")
      setSubject("")
      setTopic([])
      setBody(DEFAULT_BODY)
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your message.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children} />
      <DialogContent
        showCloseButton={false}
        className="w-[min(560px,calc(100%-2rem))] max-w-none gap-0 overflow-hidden rounded-[var(--radius)] border border-border bg-card p-0 text-foreground shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:max-w-none"
      >
        <DialogTitle className="sr-only">Compose email to Ahmad Ziyad</DialogTitle>
        <DialogDescription className="sr-only">
          Send a message directly to Ahmad Ziyad&apos;s inbox.
        </DialogDescription>

        <DialogClose
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-3 right-3 z-10 rounded-full text-muted-foreground hover:text-foreground"
            />
          }
        >
          <X />
          <span className="sr-only">Close</span>
        </DialogClose>

        <form onSubmit={handleSend} className="flex flex-col gap-4 p-6">
          <FieldGroup className="gap-3">
            <Field>
              <FieldLabel htmlFor="email-to" className="text-xs font-medium text-muted-foreground">
                To
              </FieldLabel>
              <div
                id="email-to"
                className="inline-flex w-fit items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
              >
                {RECIPIENT_NAME} {"<"}
                {RECIPIENT_EMAIL}
                {">"}
              </div>
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-name" className="text-xs font-medium text-muted-foreground">
                Name
              </FieldLabel>
              <Input
                id="contact-name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
                className="rounded-lg bg-secondary/60"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-email" className="text-xs font-medium text-muted-foreground">
                Email
              </FieldLabel>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="rounded-lg bg-secondary/60"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email-subject" className="text-xs font-medium text-muted-foreground">
                Subject
              </FieldLabel>
              <Input
                id="email-subject"
                placeholder="What's this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="rounded-lg bg-secondary/60"
              />
            </Field>
          </FieldGroup>

          <ToggleGroup
            value={topic}
            onValueChange={handleTopicChange}
            spacing={2}
            aria-label="Message topic"
            className="flex-wrap"
          >
            {topics.map((t) => (
              <ToggleGroupItem
                key={t.value}
                value={t.value}
                className="rounded-full border border-border bg-transparent px-3.5 py-1.5 text-xs font-medium text-muted-foreground data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                {t.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Separator />

          <div className="pt-0">
            <label htmlFor="email-body" className="sr-only">
              Message
            </label>
            <Textarea
              id="email-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="I'd like to talk about..."
              required
              className="min-h-[160px] resize-none rounded-lg bg-secondary/60 leading-relaxed"
            />
          </div>

          <Separator />

          {status === "success" && <p className="text-sm text-primary" role="status">Message sent successfully.</p>}
          {status === "error" && <p className="text-sm text-destructive" role="alert">{errorMessage}</p>}

          <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              className="rounded-full"
              render={<a href="https://github.com/" target="_blank" rel="noreferrer" />}
              nativeButton={false}
            >
              <GithubIcon className="size-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="rounded-full"
              render={<a href="https://linkedin.com/" target="_blank" rel="noreferrer" />}
              nativeButton={false}
            >
              <LinkedinIcon className="size-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <p className="ml-1 hidden text-xs text-muted-foreground sm:block">
              Usually replies within a day
            </p>
          </div>

          <Button type="submit" disabled={status === "sending"} className="rounded-full">
            {status === "sending" ? "Sending…" : "Send"} <Send data-icon="inline-end" />
          </Button>
        </div>
        </form>
        <p className="px-4 pb-4 text-center text-xs text-muted-foreground sm:hidden">
          Usually replies within a day
        </p>
      </DialogContent>
    </Dialog>
  )
}
