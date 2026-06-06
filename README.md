# FTG (Fun To Grow) - Landing Page Challenge

This repository contains the premium, gamified landing page developed for the **FTG Internship Assessment** by RCUBE TECHHUB PRIVATE LIMITED.

**🚀 Live Deployment:** [Insert Live Link Here]

---

## 🎯 Assignment Objective

The goal of this project was to design and develop a premium, futuristic, and dark-themed landing page that effectively communicates what FTG is, why it exists, how it works, and why both students and institutions should join the ecosystem. 

The site strictly adheres to a clean component-based architecture using **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🧠 Design Decisions & UI/UX Strategy

To achieve the "startup-quality UI" and "premium futuristic dark theme" requirements, several deliberate design decisions were made throughout the development process:

### 1. Dynamic Dual-Theming Architecture
Rather than sticking to a single monochromatic color palette, the site utilizes a **Dynamic Dual-Theme Strategy** to separate different narrative sections:
- **The "Core Platform" Theme (Deep Indigo & Blue):** Used for the Hero, Features, App Preview, and Leaderboard sections. This represents the high-tech, AI-powered logic side of the FTG platform.
- **The "Engagement" Theme (Neon Pink & Rose):** Used for the "Why FTG Exists" and "Built for the Ecosystem" sections. This vibrant palette is used to highlight the gamification, excitement, and emotional connection of the platform, contrasting the "boring grind" of traditional education with the "overcharged" ecosystem of FTG.

### 2. Glassmorphism & Depth
To ensure the interface looks premium rather than flat, extensive use of **Glassmorphism** was implemented. UI elements float on top of the deep `#05050A` background using semi-transparent `bg-white/5` overlays paired with heavy `backdrop-blur-md` effects and soft colored box-shadows.

### 3. Interactive Component Design (Zero Static Images)
Instead of relying on static placeholder images for the "App Preview", an entirely **code-based interactive mockup** was built using Tailwind CSS and Lucide React icons. 
- Elements like the "Student vs School" dashboard and the "IQ Arena Leaderboard" are fully responsive HTML/CSS structures.
- This proves advanced frontend capabilities and ensures the UI remains crisp at any resolution without pixelation or slow image loading times.

### 4. Micro-Animations & Framer Motion
`framer-motion` was integrated to provide high-quality scroll-reveal animations. 
- **Staggered entry:** Elements fade and slide in naturally as they enter the viewport (`whileInView`).
- **Interactive Hover States:** Cards flip, buttons glow, and icons scale up when the user interacts with them, making the application feel "alive" and responsive to user input.
- **Continuous Animations:** Subtle background glows, floating 3D-like edutainment icons, and CSS-based progress bar stripes run continuously to reinforce the "gamified" nature of the product.

### 5. Smart Floating Navigation
The navigation bar is completely detached from the document flow, sitting as a fixed floating "pill" at the top of the screen.
- It utilizes `IntersectionObserver` logic (via `useEffect`) to track which section the user is currently viewing.
- As the user scrolls between the Indigo/Blue sections and the Pink/Rose sections, the navigation bar **dynamically changes its glow, text color, and border** to match the surrounding environment perfectly.

---

## 🛠 Technical Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 💻 Getting Started Locally

First, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
