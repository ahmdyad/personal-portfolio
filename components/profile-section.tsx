import Image from "next/image"

const timeline = [
  {
    step: "01",
    title: "Bachelor of Computer Engineering",
    body: "Graduating from Universiti Malaysia Perlis (UniMAP) with hands-on experience in applied AI and software development.",
  },
  {
    step: "02",
    title: "Specializing in Python & AI/ML",
    body: "I am constantly building projects with YOLO, LLMs, and React to turn data into practical solutions.",
  },
  {
    step: "03",
    title: "Love learning by building",
    body: "I enjoy tackling real-world problems through code, and thrive when collaborating on team projects and workshops.",
  },
]

export function ProfileSection() {
  return (
    <section id="profile" className="py-[76px] md:py-[100px]">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[0.7rem] font-bold tracking-[0.16em] text-primary">PROFILE</p>
          <h2
            className="my-[9px] font-mono text-[clamp(1.65rem,4vw,3.1rem)] font-bold tracking-[-0.07em] text-primary"
            style={{ textShadow: "0 0 24px color-mix(in srgb, var(--primary) 30%, transparent)" }}
          >
            eat(); sleep(); code(); repeat();
          </h2>
          <p className="text-muted-foreground">Learning Applied AI Through Real-World Projects</p>
        </div>

        <div className="mt-[42px] grid grid-cols-1 items-end gap-[42px] md:mt-[58px] md:grid-cols-[1fr_0.82fr] md:gap-[70px]">
          <ol className="grid gap-[31px] p-0">
            {timeline.map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-[0.72rem] font-bold text-primary">
                  {item.step}
                </span>
                <div>
                  <h3 className="mb-[3px] text-base font-medium">{item.title}</h3>
                  <p className="text-[0.91rem] text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="relative order-first mx-auto max-w-[380px] overflow-hidden rounded-[var(--radius)] border border-border shadow-[0_0_70px_-35px_var(--primary)] md:order-none md:mx-0 md:ml-auto">
            <Image
              src="/ahmad-portfolio-portrait.jpg"
              alt="Portrait of Ahmad Ziyad standing indoors in a dark blazer"
              width={380}
              height={475}
              className="block aspect-[4/5] w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(0,0,0,.75))] px-4 pb-[13px] pt-[23px] font-mono text-[0.62rem] font-bold tracking-[0.08em] text-white">
              AHMAD ZIYAD / ENGINEER IN PROGRESS
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
