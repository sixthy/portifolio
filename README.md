# Portfolio — Rutansh Chawla

A minimal dark portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, faithful to the original design.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

> Note: Uses Next.js bundler instead of Vite (Next.js has its own optimized bundler; Vite is used for SPAs, not Next.js apps).

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Me — profile, bio, work experience, education, skills, GitHub heatmap, recent posts |
| `/work` | Things I've Built — project cards with screenshots and tags |
| `/posts` | Thoughts Worth Sharing — blog post list |
| `/moments` | Photo moments gallery |

## Customization

All content lives in `app/data.ts`. Edit it to update:
- Profile info and social links
- Work experience and education
- Skills list
- Projects
- Blog posts

## Adding a Real Profile Photo

Replace the emoji placeholder in `app/page.tsx` hero section with:

```tsx
import Image from "next/image";

<Image src="/avatar.jpg" alt="Rutansh" width={80} height={80} className="rounded-full object-cover" />
```

Then place `avatar.jpg` in the `public/` folder.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Base styles + CSS variables
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home / Me page
│   ├── data.ts            # All content data
│   ├── work/page.tsx      # Work page
│   ├── posts/page.tsx     # Posts page
│   └── moments/page.tsx   # Moments page
├── components/
│   ├── Navbar.tsx         # Top navigation
│   ├── Footer.tsx         # Footer with social icons + live clock
│   └── GitHubHeatmap.tsx  # GitHub contribution heatmap
└── public/                # Static assets
```
