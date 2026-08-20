"use client"

import * as React from "react"
import { DownloadIcon, FileWarningIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { siteConfig } from "@/lib/site-config"

// REPLACE LATER: siteConfig.cvPdfUrl controls both the embedded preview and
// the download link. Once the real CV file is added to /public, this modal
// will pick it up automatically — no other changes needed.
export function CvModal() {
  const [open, setOpen] = React.useState(false)
  const [hasPdf, setHasPdf] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    if (!open) return
    let active = true
    fetch(siteConfig.cvPdfUrl, { method: "HEAD" })
      .then((res) => {
        if (active) setHasPdf(res.ok)
      })
      .catch(() => {
        if (active) setHasPdf(false)
      })
    return () => {
      active = false
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={<Button variant="link" className="h-auto p-0 text-sm text-primary" />}
      >
        <span className="border-b border-primary/60 pb-0.5">Download CV</span>
        <DownloadIcon data-icon="inline-end" className="size-3.5" />
      </DialogTrigger>
      <DialogContent className="max-w-3xl gap-0 overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="flex-row items-center justify-between gap-4 border-b border-border px-5 py-4">
          <DialogTitle className="font-heading text-base">
            {siteConfig.name} — CV
          </DialogTitle>
        </DialogHeader>

        <div className="flex h-[70vh] max-h-[560px] flex-col bg-muted/40">
          {hasPdf === false || hasPdf === null ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
              <FileWarningIcon className="size-8 text-muted-foreground" aria-hidden="true" />
              <p className="text-sm font-medium text-foreground">
                {hasPdf === null ? "Loading CV preview…" : "CV not uploaded yet"}
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                {hasPdf === null
                  ? "Checking for the latest resume file."
                  : "The PDF will appear here as soon as it is added to the project."}
              </p>
            </div>
          ) : (
            <iframe
              src={siteConfig.cvPdfUrl}
              title={`${siteConfig.name} CV preview`}
              className="h-full w-full flex-1 border-0"
            />
          )}
        </div>

        <div className="flex justify-end border-t border-border px-5 py-4">
          <Button
            nativeButton={false}
            render={<a href={siteConfig.cvPdfUrl} download />}
            disabled={hasPdf === false}
          >
            <DownloadIcon data-icon="inline-start" />
            Download PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
