# UNITECHCYBER Next.js Project

This is the Next.js version of the UNITECHCYBER website, converted from React + Vite.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
  - `pages/` - Page components
  - `ui/` - UI components (shadcn/ui)
- `public/` - Static assets

## Key Changes from Vite/React Router

1. **Routing**: Converted from React Router to Next.js App Router
   - Routes are now file-based in the `app/` directory
   - `Link` components use `next/link` instead of `react-router-dom`

2. **Components**: All client components are marked with `'use client'` directive

3. **Image Handling**: Using Next.js `Image` component for optimized images

4. **Styling**: Tailwind CSS configuration maintained

## Pages

- `/` - Home page
- `/it-hardware` - IT Hardware Services
- `/software-solutions` - Software Solutions
- `/network-setup` - Network Setup
- `/cybersecurity` - Cybersecurity Solutions
- `/remote-support` - Remote IT Support
- `/web-development` - Web Development
- `/contact` - Contact page
- `/blog` - Blog page

## Building for Production

```bash
npm run build
npm start
```

## Notes

- All components have been converted to use Next.js patterns
- The project uses the App Router (Next.js 13+)
- Client-side interactivity is handled with 'use client' directives
- Server components are used where possible for better performance


