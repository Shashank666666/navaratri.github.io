# Navaratri Festival Website

A beautiful website for celebrating the Navaratri festival, built with React, TypeScript, and Vite.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Interactive elements and animations
- Festival information and schedule
- Gallery of images
- Devotional music player
- Newsletter subscription

## Deployment Instructions

To deploy this website to GitHub Pages:

1. Create a new repository on GitHub named `navaratri.github.io`
2. Update the `base` property in `vite.config.ts` to match your GitHub username:
   ```js
   base: "/navaratri.github.io/",
   ```
3. Update the deploy script in `package.json` with your GitHub username:
   ```json
   "deploy": "gh-pages -d build"
   ```
4. Run the following commands:
   ```bash
   npm run build
   npm run deploy
   ```

## Development

To run the website locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The website will be available at http://localhost:3000

## Technologies Used

- React with TypeScript
- Vite build tool
- Tailwind CSS for styling
- Radix UI components
- Lucide React icons