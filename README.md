# Ahmad Ziyad — Portfolio

Personal portfolio website showcasing AI/ML projects, computer vision work, and web development. Built with Next.js, React, and Tailwind CSS.

## Features

- Responsive layout with light/dark theme support
- Home, About, and Projects pages
- Contact form with email delivery (Resend API)
- CV download and email composer
- Centralized site content in a single config file

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + Base UI
- [Vercel Analytics](https://vercel.com/analytics)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

### Install dependencies

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

## Environment Variables

Create a `.env.local` file in the project root for local development:

```env
RESEND_API_KEY=your_resend_api_key
```

The contact form requires `RESEND_API_KEY`. Without it, the form returns a temporary-unavailable message.

Do not commit `.env.local` — it is already listed in `.gitignore`.

## Project Structure

```
├── app/                 # Next.js pages, layout, and API routes
│   ├── about/
│   ├── projects/
│   └── api/contact/     # Contact form endpoint
├── components/          # React components and UI primitives
├── lib/
│   └── site-config.ts   # Site copy, projects, and contact info
├── public/              # Static assets (images, CV, icons)
├── package.json
└── pnpm-lock.yaml
```

## Customizing Content

Most site content lives in `lib/site-config.ts`. Edit that file to update:

- Name, role, and skills
- Navigation links
- About page content
- Project cards and GitHub links
- Contact email and WhatsApp link
- CV and portrait paths

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `pnpm dev`    | Start development server |
| `pnpm build`  | Create production build  |
| `pnpm start`  | Run production server    |
| `pnpm lint`   | Run ESLint               |

## Deployment

This project works well on [Vercel](https://vercel.com/). After connecting your GitHub repo:

1. Set `RESEND_API_KEY` in the project environment variables
2. Deploy — Vercel will run `pnpm install` and `pnpm build` automatically

## License

Private project — all rights reserved.
