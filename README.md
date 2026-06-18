# Rudra Creations — Telugu Film Production House

Rudra Creations is a premium, state-of-the-art web application representing **Rudra Creations**, a leading Telugu film production house based in Manikonda, Hyderabad, India. Founded in 2018 by **T Leela Gowtham Varma**, Rudra Creations is dedicated to crafting inspiring, cinematic stories for Tollywood and pan-Indian audiences.

This repository hosts a highly responsive, cinematic website designed to showcase the company's filmography, upcoming ventures, behind-the-scenes gallery, location details, and direct contact options.

---

## 🎬 Project Highlights & Filmography

### Released Projects
*   **Kali (2024)**
    *   **Genre:** Psychological Thriller
    *   **Cast:** Naresh Agastya, Prince Cecil, Neha Krishna
    *   **Director & Writer:** Siva Sashu
    *   **Producer:** T Leela Gowtham Varma
    *   **Screenplay:** Nishanth Katari, Ramana Jagarlamudi
    *   **Description:** Sivaram, struggling with the consequences of his life choices, decides to end his life. A mysterious guest arrives at his house and forces him to play a high-stakes game of Othello, revealing profound facts of life.

### Upcoming Ventures
*   **Shakti — Rise of the Phoenix (2025)**
    *   **Genre:** Action / Mythology
    *   **Director:** Siva Sashu
    *   **Language:** Telugu / Tamil / Hindi (Pan-India)
    *   **Description:** An untold legend resurfaces. When the city of Hyderabad is threatened by a supernatural force, only the chosen one can awaken the ancient Shakti within.
*   **Abaddam (2025)**
    *   **Genre:** Political Thriller
    *   **Director:** T Leela Gowtham Varma
    *   **Description:** In a democracy where every vote is a battle, one ordinary man's lie becomes the most powerful weapon.
*   **Kala Ratri (2026)**
    *   **Genre:** Horror / Supernatural
    *   **Director:** T Leela Gowtham Varma
    *   **Description:** Venturing into the darkest corners of Telugu folklore, Kala Ratri delivers an immersive supernatural experience.

---

## 🛠️ Tech Stack & Key Libraries

The website is engineered with a modern, high-performance web stack to deliver a smooth and engaging user experience:

*   **Framework:** [React 18](https://react.dev/) + [Vite](https://vite.dev/) (TypeScript configuration for type safety)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & custom CSS utilities for high-fidelity animations
*   **Component Library:** [shadcn/ui](https://ui.shadcn.com/) (primitives built on top of Radix UI)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) for fluid, cinematic scrolling, triggers, and state transitions
*   **Icons:** [Lucide React](https://lucide.dev/) for vector iconography
*   **Form Management:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for client-side schema validation
*   **Email Dispatch:** [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`) for direct message forwarding from the contact page
*   **Interactions:** Custom trailing cursor, custom map integrations, and WhatsApp floating chat support

---

## ⚙️ Features Implemented

1.  **Immersive Cinema Design System:** Deep dark aesthetics, gold accents (`#D4AF37`), elegant serif typography (Cinzel, Playfair Display), and sleek sans-serif layout fonts (Sora, Inter).
2.  **Interactive Portfolio Modals:** Clickable project showcases with seamless YouTube trailer integrations and complete cast & crew details.
3.  **Dynamic Transitions:** A customized scroll wrapper (`CinematicSection.tsx`) that handles scroll-driven entrance and reveal animations.
4.  **Custom Cursor:** A customized trailing cursor that dynamically adjusts on hover and interactions to deliver a premium feel.
5.  **Interactive Location Map:** Custom map implementation targeting the Hyderabad studio location.
6.  **Secure Contact Form:** Integrated validation rules preventing invalid inputs, linked to an automated mailing response pipeline.
7.  **Fully Optimized SEO:** Structured Schema.org JSON-LD metadata for search engines, open graph cards for social sharing, and search-engine friendly structure.

---

## 🚀 Local Development Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd RudhraCreations
```

### 2. Install Dependencies
You can use npm, yarn, or Bun:
```bash
npm install
# or
bun install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your keys if necessary:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run Development Server
Start the local server with instant hot-module replacement (HMR):
```bash
npm run dev
# or
bun dev
```
Open `http://localhost:5173` in your browser.

### 5. Build for Production
To build the static application bundle optimized for production deployment:
```bash
npm run build
# or
bun run build
```
The production-ready assets will be generated inside the `dist/` directory.

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicons, robots.txt, sitemap.xml)
├── src/
│   ├── assets/             # Images, fonts, and global graphics
│   ├── components/
│   │   ├── features/       # Feature-specific components (Hero, Gallery, Contact, etc.)
│   │   ├── layout/         # Navigation, Footer, and structural shells
│   │   └── ui/             # Reusable UI primitives (Buttons, Inputs, Dialogs)
│   ├── constants/          # Static data (company info, movies, gallery list)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Shared utilities (Tailwind merges, custom scripts)
│   ├── pages/              # Main route views (Home, NotFound)
│   ├── types/              # TypeScript interfaces and type declarations
│   ├── App.tsx             # Root routing and global providers
│   ├── index.css           # Global Tailwind and custom styles
│   └── main.tsx            # Main application entry point
├── package.json            # Scripts and dependency registry
├── tailwind.config.ts      # Tailwind configuration file
└── vite.config.ts          # Vite configuration options
```
