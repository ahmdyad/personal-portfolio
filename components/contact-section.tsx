import { Button } from "@/components/ui/button"
import { EmailComposerDialog } from "@/components/email-composer-dialog"

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-[76px] text-center md:py-[100px]">
      <div className="mx-auto w-[min(700px,calc(100%-32px))]">
        <p className="text-[0.7rem] font-bold tracking-[0.16em] text-primary">LET&apos;S CONNECT</p>
        <h2 className="my-[9px] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.05em]">
          Have a project in mind?
        </h2>
        <p className="text-[1.05rem] text-muted-foreground">
          Reach out and let&apos;s build something worth shipping.
        </p>
        <div className="mt-[30px] flex flex-wrap items-center justify-center gap-3">
          <EmailComposerDialog>
            <Button className="rounded-full">Email Me</Button>
          </EmailComposerDialog>
          <Button
            variant="outline"
            className="rounded-full"
            render={<a href="https://wa.link/x9d2l1" target="_blank" rel="noreferrer" />}
            nativeButton={false}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
