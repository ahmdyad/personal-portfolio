"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[68px] w-[min(1120px,calc(100%-32px))] items-center justify-between gap-6"
      >
        <Link href="/" aria-label="Ahmad Ziyad — home" className="flex items-center gap-2.5 text-sm">
          <span className="font-display text-[1.05rem] font-extrabold tracking-[-0.08em] text-primary">
            YAD
          </span>
          <strong className="font-medium">Ahmad Ziyad</strong>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.86rem] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            className="hidden rounded-full md:inline-flex"
            render={<Link href="/#contact" />}
            nativeButton={false}
          >
            Contact Me
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full md:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-card px-4 pb-[18px] pt-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="mt-2 w-full justify-center rounded-full"
            render={<Link href="/#contact" onClick={() => setOpen(false)} />}
            nativeButton={false}
          >
            Contact Me
          </Button>
        </div>
      )}
    </header>
  )
}
