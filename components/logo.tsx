import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

// Text-based logo mark. REPLACE LATER: if a real logo graphic is uploaded,
// swap the <span> mark below for an <Image> and keep the wrapping <Link>.
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
        <span
          className="text-sm font-extrabold text-primary"
          style={{ fontFamily: "var(--font-logo)", letterSpacing: "0.04em" }}
        >
          {siteConfig.logoMark}
        </span>
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-heading text-sm font-semibold text-foreground">
          {siteConfig.name}
        </span>
        <span className="text-[11px] text-muted-foreground">Engineer &amp; Builder</span>
      </span>
    </Link>
  )
}
