# Vistara AI

Vistara AI is a modern, sleek web frontend for AI‑powered image generation from text prompts. Users can submit prompts (and optional negative prompts), choose style and aspect ratio, and view/download the generated images.

---

## Features

- Responsive and clean UI built with Tailwind CSS  
- Text prompt + negative prompt support  
- Style presets (Neon Punk, Digital Art, Oil Painting, Anime, Photographic, Fantasy)  
- Multiple aspect ratio options (16:9, 1:1, 4:3, 3:2)  
- Download generated images  
- Smooth animations and gradient / design effects  
- Mobile navigation & menu toggle  

---

## Getting Started

### Prerequisites

- A backend or API endpoint that accepts the prompt, style, negative prompt, aspect ratio etc., and returns an image URL or binary image data  
- Node.js (if you plan to run a local dev server)  
- Serve the static HTML / JS (or integrate into a frontend framework)

### Installation (Local Development)

```bash
# If using a local server or bundler, clone this repo:
git clone https://github.com/yourusername/vistara-ai.git
cd vistara-ai

# (Optional) If using a local dev server setup (e.g. with HTTP server or bundler), install dependencies:
npm install
npm run dev
