# FTG Landing Page Challenge

This project is a premium, futuristic, dark-themed landing page developed for the FTG (Fun To Grow) Internship Assessment by RCUBE TECHHUB PRIVATE LIMITED.

## Design Decisions

1.  **Framework & Stack**: Built with Next.js (App Router), React, TypeScript, and Tailwind CSS. This stack was chosen for its performance, type safety, and rapid styling capabilities, aligning directly with the assessment's technical preferences.
2.  **Aesthetics & Theme**: The design utilizes a "futuristic dark theme" with deep blacks (`bg-black`), glowing accents (`blue-500`, `purple-500`), and glassmorphic elements (`bg-white/5`, `backdrop-blur`). This creates a modern, high-tech, and premium feel suitable for a next-generation edutainment platform.
3.  **Animations**: `framer-motion` was integrated to provide smooth, scroll-triggered micro-animations (`whileInView`) and staggered reveals. This adds polish and makes the platform feel dynamic and interactive without overwhelming the user.
4.  **Component Architecture**: The application is highly modularized into logical components (`Hero`, `About`, `Features`, `AppPreview`, etc.) within the `src/components` directory. This clean architecture promotes reusability, easier testing, and better maintainability.
5.  **App Preview Mockup**: Instead of static images, a CSS/HTML-based interactive mockup of the app was built using Tailwind CSS and Lucide icons. This gives a much more authentic "startup-quality" feel and demonstrates advanced UI skills.
6.  **Responsiveness**: The entire layout is fully responsive, utilizing Tailwind's mobile-first breakpoints (`md:`, `lg:`) to ensure optimal viewing on mobile devices, tablets, and large desktop screens.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
