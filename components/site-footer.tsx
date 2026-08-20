import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-[34px]">
      <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <Link href="/" className="flex items-center gap-2.5 text-sm">
          <span className="font-display text-[1.05rem] font-extrabold tracking-[-0.08em] text-primary">
            YAD
          </span>
          <strong className="font-medium">Ahmad Ziyad</strong>
        </Link>
        <div className="flex gap-5">
          <Link href="/about" className="text-[0.86rem] text-muted-foreground transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="/projects"
            className="text-[0.86rem] text-muted-foreground transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link href="/#contact" className="text-[0.86rem] text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
        <p className="text-[0.75rem] text-muted-foreground">© {year} Ahmad Ziyad. All rights reserved.</p>
      </div>
    </footer>
  )
}
