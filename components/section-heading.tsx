export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
}) {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow && (
        <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-pretty text-base text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
