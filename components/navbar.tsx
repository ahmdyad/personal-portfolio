"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MailIcon, MenuIcon, MessageCircleIcon } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { contactInfo, navLinks } from "@/lib/site-config"

function ContactMenu() {
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline" size="sm" className="rounded-full px-4" />}
      >
        Contact Me
      </PopoverTrigger>
      <PopoverContent align="end" className="w-64">
        <a
          href={`mailto:${contactInfo.email}`}
          className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
        >
          <MailIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Email me</span>
            <span className="text-xs text-muted-foreground">{contactInfo.email}</span>
          </span>
        </a>
        <a
          href={contactInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
        >
          <MessageCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="flex flex-col">
            <span className="text-sm font-medium text-foreground">WhatsApp</span>
            <span className="text-xs text-muted-foreground">Chat with me directly</span>
          </span>
        </a>
      </PopoverContent>
    </Popover>
  )
}

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ContactMenu />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button type="button" variant="outline" size="icon-sm" />}
            >
              <MenuIcon />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-4/5">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <SheetClose
                      render={
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted"
                        />
                      }
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-2 p-4">
                <SheetClose
                  render={
                    <Button
                      variant="default"
                      className="w-full justify-start rounded-full"
                      nativeButton={false}
                      render={<a href={`mailto:${contactInfo.email}`} />}
                    />
                  }
                >
                  <MailIcon data-icon="inline-start" />
                  Email me
                </SheetClose>
                <SheetClose
                  render={
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-full"
                      nativeButton={false}
                      render={
                        <a
                          href={contactInfo.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    />
                  }
                >
                  <MessageCircleIcon data-icon="inline-start" />
                  WhatsApp
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
