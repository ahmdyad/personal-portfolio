import Image from "next/image"
import { growingEngineerStatements, siteConfig } from "@/lib/site-config"
import { SectionHeading } from "@/components/section-heading"

export function GrowingEngineerSection() {
  return (
    <section className="border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Profile"
          title="Growing Engineer"
          subtitle="Learning Applied AI Through Real-World Projects"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end lg:gap-8">
          <ol className="order-2 flex flex-col gap-8 lg:order-1">
            {growingEngineerStatements.map((statement, index) => (
              <li key={statement.title} className="flex gap-4">
                <span
                  className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 font-mono text-xs font-semibold text-primary"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {statement.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {statement.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* REPLACE LATER: siteConfig.portraitSrc points at the uploaded portrait. */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_0_80px_-30px_var(--primary)]">
              <Image
                src={siteConfig.portraitSrc || "/placeholder.svg"}
                alt={siteConfig.portraitAlt}
                fill
                sizes="(min-width: 1024px) 384px, 90vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
