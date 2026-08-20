import { Logo } from "@/components/logo"
import { navLinks } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo />
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ahmad Ziyad. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
