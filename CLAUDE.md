# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js development server with Turbopack on localhost:3000
- **Build**: `npm run build` - Creates production build with Turbopack
- **Start**: `npm run start` - Starts production server

## Tech Stack

This is a Next.js 15 portfolio application with:

- **Framework**: Next.js 15.5.4 with App Router
- **Runtime**: React 19.1.0 with TypeScript 5
- **Styling**: Tailwind CSS v4 with custom theme system
- **Animations**: Framer Motion for UI animations
- **Icons**: Lucide React
- **Theme**: Custom dark/light mode system with system preference support

## Architecture

### Component Structure
The portfolio follows a modular component structure:

- **Layout**: `src/app/layout.tsx` - Root layout with theme provider and metadata
- **Home Page**: `src/app/page.tsx` - Main page composed of section components
- **Components**: `src/components/` - All UI components

### Key Components
- `navigation.tsx` - Sticky navigation with mobile hamburger menu and theme toggle
- `hero-section.tsx` - Landing section with animated intro
- `about-section.tsx` - About me section
- `skills-section.tsx` - Technical skills showcase
- `projects-section.tsx` - Project portfolio
- `experience-section.tsx` - Work experience timeline
- `contact-section.tsx` - Contact form and information
- `theme-provider.tsx` - Context provider for theme management
- `theme-toggle.tsx` - Theme switching component

### Styling System
The application uses a custom CSS variable system in `src/app/globals.css`:
- Theme-agnostic colors defined as CSS custom properties
- Light and dark theme variants
- Glass morphism effects with backdrop blur
- Custom utility classes for animations and hover effects
- Tailwind CSS v4 configuration using `@theme inline`

### Theme Management
- Custom theme provider context with localStorage persistence
- System preference detection with `prefers-color-scheme`
- Theme switching via CSS class attributes
- Smooth theme transitions

### Navigation
- Single-page application with smooth scrolling between sections
- Active section highlighting
- Mobile-responsive navigation with hamburger menu
- Sticky glass morphism navigation bar

## Development Notes

- Uses Next.js App Router with page-based routing
- TypeScript path aliases configured: `@/*` points to `src/*`
- No additional linting or testing commands configured in package.json
- Development runs with Turbopack for faster builds