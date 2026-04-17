# Ria Portfolio

A modern single-page software engineering portfolio built with Angular.

## Live Website

[https://nashiwa-reza.netlify.app/](https://nashiwa-reza.netlify.app/)

## Overview

This project is a personal portfolio website for Nashiwa Reza. It is designed as a clean, modern, responsive single-page experience that highlights professional experience, technical skills, education, and contact information.

The site was built from resume content in the `docs` folder and shaped into a portfolio presentation suitable for web sharing and recruiter review.

## Features

- Responsive single-page portfolio layout
- Modern Angular 21 setup
- Soft, polished visual design with subtle motion
- Experience timeline and skills sections
- Contact links for email, LinkedIn, and GitHub
- Production-ready static build for Netlify deployment

## Tech Stack

- Angular 21
- TypeScript
- SCSS
- Angular CLI
- Vitest

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm start
```

Then open:

```bash
http://localhost:4200/
```

## Build

Create a production build:

```bash
npm run build
```

The production files are generated in:

```bash
dist/ria-portfolio/browser
```

## Testing

Run unit tests:

```bash
npm test
```

## Deployment

This project is deployed on Netlify.

For manual drag-and-drop deployment, upload the contents of:

```bash
dist/ria-portfolio/browser
```

## Project Structure

```text
src/
  app/
    app.ts
    app.html
    app.scss
  index.html
  main.ts
  styles.scss

public/
docs/
```

## Content Source

The initial portfolio content was derived from the resume PDF located in:

```text
docs/Lebenslauf_Nashiwa.pdf
```

## Author

Nashiwa Reza

- Portfolio: [https://nashiwa-reza.netlify.app/](https://nashiwa-reza.netlify.app/)
- LinkedIn: [https://www.linkedin.com/in/nashiwa-reza/](https://www.linkedin.com/in/nashiwa-reza/)
- GitHub: [https://github.com/nashiwa](https://github.com/nashiwa)
