import { GraduationCapIcon, SparklesIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { aboutContent } from "@/lib/site-config"

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading eyebrow="About" title="About Me" align="left" />

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-2xl font-semibold text-foreground">
            {aboutContent.name}
          </h3>
          <p className="text-base text-primary">{aboutContent.role}</p>
        </div>

        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {aboutContent.bio}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/50 p-6">
            <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <GraduationCapIcon className="size-4.5" aria-hidden="true" />
            </span>
            <span className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
              Institution
            </span>
            <p className="text-pretty font-heading text-base font-medium text-foreground">
              {aboutContent.institution}
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/50 p-6">
            <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <SparklesIcon className="size-4.5" aria-hidden="true" />
            </span>
            <span className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
              Specialization
            </span>
            <ul className="flex flex-wrap gap-2">
              {aboutContent.specialization.map((item) => (
                <li key={item}>
                  <Badge variant="secondary" className="rounded-full">
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
