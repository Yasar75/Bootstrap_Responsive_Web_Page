# Yasar Reza Rahaman — Portfolio Website

A responsive, accessible personal portfolio built with **HTML, CSS and vanilla JavaScript**. No framework, package installation, API keys, or build step required.

## Quick start

1. Extract the ZIP.
2. Open `index.html` directly in your browser.
3. For development, serve this folder using VS Code Live Server or run `python -m http.server 8080` and visit `http://localhost:8080`.

## Features

- Premium responsive dark/light theme, with remembered preference.
- Project filters and detailed interactive case-study dialogs.
- Real GitHub repository links (no links to private work).
- Career timeline, categorized skills, and education details.
- LinkedIn/GitHub contact links, mailto CTA, and email copy action.
- Original résumé PDF included under `assets/`.
- Basic SEO/Open Graph metadata and schema.org Person data.
- Mobile navigation and keyboard-accessible controls.

## Updating your details

- **Projects:** Edit the `projects` array at the start of `app.js`. Projects with `github: null` display as professional case studies without a repository link.
- **Experience, skills, intro, and email:** Edit `index.html`.
- **Visual theme and layout:** Edit `styles.css`.
- **Résumé:** Replace `assets/Yasar_Reza_Rahaman_Resume.pdf` with the current file.

## Publishing

This is a static site. Publish the extracted folder to GitHub Pages, Netlify, Vercel, or any static host. Set the publish directory to the repository root; there is no build command.

## Source notes

Profile content was prepared from the user's saved recruiter résumé, public LinkedIn profile (`linkedin.com/in/yasar5`), public GitHub account (`github.com/Yasar75`), and previous project descriptions supplied by the user. Years of experience are intentionally written as 4.5+ to match the résumé rather than as an auto-calculated number. Public project art is **conceptual illustration** rather than product screenshots. The public portfolio intentionally omits personal telephone numbers and internal/private source details. The résumé PDF, however, contains the original contact information and has not been modified.

Professional experience and project details should be reviewed by the owner before publication; project names and descriptions are intended as brief, non-confidential summaries.