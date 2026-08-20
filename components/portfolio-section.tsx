import { ArrowUpRightIcon, FolderGitIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/site-config"

export function PortfolioSection() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          subtitle="Selected builds in AI/ML and computer vision. Click any card to open it on GitHub."
        />

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.href}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <FolderGitIcon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                    View on GitHub
                    <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="secondary" className="rounded-full font-mono text-xs">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <span className="sr-only">Opens {project.title} on GitHub in a new tab</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
