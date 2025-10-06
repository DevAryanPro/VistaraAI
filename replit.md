# Vistara AI

## Overview
Vistara AI is a modern, sleek web frontend for AI-powered image generation from text prompts. This is a static HTML/CSS/JavaScript application that provides a beautiful interface for users to generate images using AI.

**Current State**: Fully configured and running on Replit. The application is served using Python's built-in HTTP server on port 5000.

## Recent Changes
- **October 6, 2025**: Initial GitHub import setup
  - Renamed `app.html` to `index.html` for standard web conventions
  - Installed Python 3.11 for serving static files
  - Configured workflow to serve frontend on port 5000 with host 0.0.0.0
  - Created `.gitignore` file for Python and common development artifacts
  - Configured deployment settings for autoscale deployment
  - Set up project documentation

## Project Architecture

### Frontend
- **Technology**: Static HTML with Tailwind CSS and vanilla JavaScript
- **File Structure**:
  - `index.html` - Main application page with AI image generation interface
  - `app.js` - Obfuscated JavaScript (appears to be minified/protected code)
  - `image.png`, `photo_2025-05-07_22-57-43.jpg` - Static assets

### Features
- Responsive UI built with Tailwind CSS
- Text prompt and negative prompt support for image generation
- Style presets: Neon Punk, Digital Art, Oil Painting, Anime, Photographic, Fantasy
- Multiple aspect ratio options: 16:9, 1:1, 4:3, 3:2
- Image download functionality
- Mobile-responsive navigation with menu toggle
- Smooth animations and gradient effects

### Backend Integration
The frontend connects to an external API at `https://aiart-zroo.onrender.com/api/generate` for image generation. This is a third-party service and not hosted on Replit.

### Server Configuration
- **Development**: Python HTTP server on port 5000
- **Host**: 0.0.0.0 (accessible via Replit's proxy)
- **Deployment**: Configured for autoscale deployment (serverless)

## How to Run Locally
The application is automatically served when the Replit starts via the configured workflow. No build step is required as this is a static site.

## Deployment
The project is configured for autoscale deployment, which is ideal for this static website:
- No build step required
- Serves static files on demand
- Cost-effective for low to medium traffic

## Dependencies
- Python 3.11 (for serving static files)
- External CDN resources:
  - Tailwind CSS
  - Google Fonts (Geist font family)
  - Lucide Icons

## User Preferences
None documented yet.

## Notes
- The application uses an external API for image generation, so functionality depends on that service being available
- The `app.js` file appears to be obfuscated/minified, making it difficult to modify
- All styling is handled inline in `index.html` using Tailwind CSS and custom CSS
