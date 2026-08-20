// ---------------------------------------------------------------------------
// Central content config for Ahmad Ziyad's portfolio.
// Edit the values below to update copy across the site — no need to touch
// individual components.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Ahmad Ziyad",
  // Short mark shown in the navbar logo. Rendered in a distinct display font.
  logoMark: "YAD",
  role: "AI/ML, Computer Vision, Creative Web Architecture — Open to Work",
  skills: ["Python", "C", "Pandas", "NumPy", "PyTorch", "OpenCV", "React"],

  // REPLACE LATER: point this at the real CV once it is uploaded, e.g.
  // "/ahmad-ziyad-cv.pdf". Leave as-is to show the "not uploaded yet" state.
  cvPdfUrl: "/ahmad-ziyad-cv.pdf",

  // REPLACE LATER: swap this path for the final portrait asset if needed.
  portraitSrc: "/ahmad-portrait.jpg",
  portraitAlt: "Portrait of Ahmad Ziyad standing indoors in a dark blazer",
} as const

// Contact details used by the "Contact Me" menu in the navbar.
export const contactInfo = {
  email: "ahmdziyad24@gmail.com",
  // Displayed label for the phone/WhatsApp entry.
  phoneLabel: "Message on WhatsApp",
  whatsappUrl: "https://wa.link/x9d2l1",
} as const

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
] as const

// Full "About Me" content shown on the /about page.
export const aboutContent = {
  name: "Ahmad Ziyad",
  role: "Computer Engineering Student",
  institution: "Universiti Malaysia Perlis (UniMAP)",
  specialization: ["AI/ML", "Computer Vision", "Creative Web Architecture"],
  bio: "Computer Engineering student applying analytical thinking and a proactive engineering approach to develop practical, high-performance AI models and modern web solutions.",
} as const

// Projects shown on the /projects page. Each card links out to its GitHub repo.
export const projects = [
  {
    title: "Student Stress Prediction (ML)",
    description:
      "Machine learning model that predicts student stress levels from lifestyle and academic indicators.",
    tags: ["Python", "Pandas", "scikit-learn"],
    href: "https://github.com/ahmdyad/student-stress-prediction-ml",
  },
  {
    title: "Tennis Analysis System",
    description:
      "Computer vision system that tracks players and the ball to analyze tennis match dynamics.",
    tags: ["Python", "OpenCV", "YOLO"],
    href: "https://github.com/ahmdyad/tennis-analysis-system",
  },
  {
    title: "Cold Email Generation Tool",
    description:
      "LLM-powered tool that drafts tailored cold outreach emails from job postings and context.",
    tags: ["Python", "LLM", "LangChain"],
    href: "https://github.com/ahmdyad/cold-email-generation-tool",
  },
  {
    title: "YOLOv8 Animal Detection",
    description:
      "Real-time object detection pipeline built on YOLOv8 for identifying animals in images and video.",
    tags: ["Python", "PyTorch", "YOLOv8"],
    href: "https://github.com/ahmdyad/yolov8-animal-detection",
  },
] as const

export const growingEngineerStatements = [
  {
    title: "Bachelor of Computer Engineering",
    body: "Graduating from Universiti Malaysia Perlis (UniMAP) with hands-on experience in applied AI and software development.",
  },
  {
    title: "Specializing in Python & AI/ML",
    body: "I am constantly building projects with YOLO, LLMs, and React to turn data into practical solutions.",
  },
  {
    title: "Love learning by building",
    body: "I enjoy tackling real-world problems through code, but I also thrive when collaborating on team projects and workshops.",
  },
] as const
