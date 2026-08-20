// Original abstract keyboard/terminal illustration built from CSS shapes —
// a decorative technical accent below the hero, not a copied asset.
export function WorkstationVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl" aria-hidden="true">
      <div className="rounded-2xl border border-border/60 bg-card/60 p-4 shadow-[0_0_60px_-20px_var(--primary)] sm:p-6">
        <div className="flex items-center gap-2 border-b border-border/60 pb-3">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-muted-foreground/40" />
          <span className="size-2.5 rounded-full bg-primary/70" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            ~/ahmad-ziyad/portfolio
          </span>
        </div>

        <div className="grid gap-2 py-4 font-mono text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
          <p>
            <span className="text-primary">$</span> python train.py --model yolo --epochs 100
          </p>
          <p className="text-foreground/80">
            [INFO] loading dataset... <span className="text-primary">done</span>
          </p>
          <p className="text-foreground/80">
            [INFO] epoch 100/100 — loss: 0.021 — acc: <span className="text-primary">98.4%</span>
          </p>
          <p>
            <span className="text-primary">$</span> <span className="animate-pulse">▌</span>
          </p>
        </div>

        <div className="grid grid-cols-12 gap-1.5 border-t border-border/60 pt-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="h-6 rounded-md border border-border/60 bg-muted/50"
              style={{
                opacity: 0.4 + ((i * 7) % 10) / 20,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
