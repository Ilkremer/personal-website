# Isaac Kremer — Engineering Portfolio

Personal engineering portfolio for **Isaac Kremer**, an Electrical & Computer Engineering student with experience in aerospace electrical systems, manufacturing, industrial electrical work, and hands-on engineering.

The site documents my professional experience, selected engineering work, technical skills, and current development in embedded systems.&#x20;

### [isaackremer.dev](https://isaackremer.dev)

## About the Site

This website serves as my personal engineering portfolio and professional website.

Rather than functioning only as an online résumé, the site is intended to document the engineering areas I have worked in and the technical areas I am continuing to develop.

The current site includes:

- Professional engineering experience
- Selected engineering work
- Technical skills
- Current engineering interests and projects
- Résumé access
- GitHub and LinkedIn links
- Contact information

## Engineering Areas

The portfolio currently highlights experience and work involving:

- Aerospace electrical systems
- Electrical harnessing
- Avionics support
- Manufacturing engineering
- Industrial electrical systems
- Panel wiring and instrumentation
- Troubleshooting and debugging
- Mechatronics
- Embedded systems
- Digital hardware

My current technical development is focused particularly on:

- Synchronous digital logic
- Embedded C/C++
- ESP32 development
- Hardware-software integration

## Built With

The website is built using:

- [Astro](https://astro.build/)
- TypeScript
- HTML
- CSS
- Node.js / npm
- GitHub Actions
- GitHub Pages

Astro is used to generate a lightweight static website while allowing the site to be organized into reusable components and centralized data.

## Project Structure

```text
personal-website/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   └── resume.pdf
│
├── src/
│   ├── components/
│   │   ├── ExperienceItem.astro
│   │   ├── FocusCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── WorkCard.astro
│   │
│   ├── data/
│   │   └── site.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Site Architecture

Most portfolio content is stored in:

```text
src/data/site.ts
```

This includes:

- Personal/site information
- Navigation links
- Professional experience
- Engineering work
- Current areas of focus
- Technical skill groups

The page itself is assembled in:

```text
src/pages/index.astro
```

using reusable Astro components from:

```text
src/components/
```

This keeps the site's content separate from much of its presentation logic and makes future updates easier.

## Local Development

Install dependencies and start the Astro development server:

```bash
npm install
npm run dev
```

Build and preview the production site:

```bash
npm run build
npm run preview
```

## Deployment

The site is deployed with **GitHub Pages** and uses the custom domain:

### [isaackremer.dev](https://isaackremer.dev)

Deployment is handled automatically through:

```text
.github/workflows/deploy.yml
```

The GitHub Actions workflow runs whenever changes are pushed to the `main` branch.

The deployment process:

1. Checks out the repository
2. Installs and builds the Astro project
3. Uploads the generated static site
4. Deploys the build to GitHub Pages

The custom domain is also defined through:

```text
public/CNAME
```

## Updating Site Content

Most résumé-style information can be updated without modifying the page structure.

Edit:

```text
src/data/site.ts
```

to update:

- Experience
- Engineering work
- Skills
- Current focus areas
- Contact information
- Social links

Changes pushed to `main` are automatically rebuilt and deployed.

## Current Development

The portfolio itself is an ongoing project.

Current and planned additions include documenting more complete technical projects as I develop greater depth in:

- FPGA and RTL design
- Embedded systems
- Digital hardware
- Computer architecture
- Hardware-software integration

The goal is for future project pages to document not only final results, but also engineering requirements, architecture, implementation, testing, verification, and design decisions.

## Repository

**GitHub:** [Ilkremer/personal-website](https://github.com/Ilkremer/personal-website)

## Author

**Isaac Kremer**\
Electrical & Computer Engineering Student

- Website: [isaackremer.dev](https://isaackremer.dev)
- GitHub: [github.com/Ilkremer](https://github.com/Ilkremer)
- LinkedIn: [linkedin.com/in/isaac-kremer](https://www.linkedin.com/in/isaac-kremer/)
