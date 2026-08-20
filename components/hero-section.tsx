import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border py-[76px] text-center [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--foreground)_6%,transparent)_1px,transparent_1px)] [background-size:44px_44px] md:py-[100px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-280px] h-[520px] w-[700px] -translate-x-1/2 rounded-full [background:radial-gradient(ellipse,color-mix(in_srgb,var(--primary)_22%,transparent),transparent_66%)]"
      />
      <div className="relative mx-auto w-[min(1120px,calc(100%-32px))]">
        <p className="text-[0.7rem] font-bold tracking-[0.16em] text-primary">PORTFOLIO / 2026</p>
        <h1
          className="mt-3 font-display text-[clamp(3rem,9vw,6.7rem)] leading-none tracking-[-0.07em]"
          style={{ textShadow: "0 0 30px color-mix(in srgb, var(--primary) 30%, transparent)" }}
        >
          Ahmad Ziyad
        </h1>
        <p className="mt-2.5 font-mono text-[clamp(0.75rem,2vw,1rem)] text-primary">
          {"{ Python, C, Pandas, NumPy, PyTorch, OpenCV, React }"}
        </p>
        <p className="mx-auto mt-[22px] max-w-[600px] text-[1.05rem] text-muted-foreground">
          AI/ML, Computer Vision, Creative Web Architecture{" "}
          <span className="whitespace-nowrap">— Open to Work</span>
        </p>
        <div className="mt-[30px] flex flex-wrap items-center justify-center gap-3">
          <Button className="rounded-full" render={<Link href="/projects" />} nativeButton={false}>
            View Projects <ArrowUpRight data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            render={<a href="/#contact" />}
            nativeButton={false}
          >
            View CV
          </Button>
        </div>

        <div className="mx-auto mt-[60px] max-w-[675px] overflow-hidden rounded-[var(--radius)] border border-border bg-card/80 text-left shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <div className="flex h-[42px] items-center gap-[7px] border-b border-border px-[15px]">
            <span className="size-[9px] rounded-full bg-[#e97171]" />
            <span className="size-[9px] rounded-full bg-[#f6c45f]" />
            <span className="size-[9px] rounded-full bg-[#56b781]" />
            <p className="ml-1.5 font-mono text-xs text-muted-foreground">ahmad@portfolio:~</p>
          </div>
          <div className="p-[25px] font-mono text-sm leading-relaxed">
            <p>
              <i className="not-italic text-primary">$</i> whoami
            </p>
            <p className="pl-[18px] text-muted-foreground">Computer Engineering student · AI/ML builder</p>
            <p>
              <i className="not-italic text-primary">$</i> status
            </p>
            <p className="pl-[18px] text-primary">Available for opportunities_</p>
          </div>
        </div>
      </div>
    </section>
  )
}
