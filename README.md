# Ankush Garg — Portfolio

Personal portfolio built with React, TypeScript, Vite, and CSS. It presents my software engineering work across agentic AI, full-stack products, and AWS infrastructure. The hero artwork is built entirely with HTML and CSS; no personal photo is published.

## Featured work

- **Scout:** an admissions assistant using tree-structured retrieval, LangGraph, FastAPI, and Next.js.
- **ResumeAI:** a full-stack resume builder with PostgreSQL persistence and Groq-powered Smart Assembly.
- **Shortly:** a serverless URL shortener on AWS, provisioned with Terraform and validated with automated tests.

The experience section also describes my internship with Infonza Innovations and my current work on The First Chapter school website. Project links and claims in the site should be kept in sync with their live demos and repositories.

## Run locally

```bash
npm ci --legacy-peer-deps
npm run dev
```

Open the local URL printed by Vite.

## Check the site

```bash
npm run build
npm run lint
```

The production output is in `dist/`. Deploy that directory to any static host. No backend or secrets are needed for this portfolio.

## Update content

- Main content and project links: `src/App.tsx`
- Layout, colors, and responsive styles: `src/index.css`
- Browser metadata: `index.html`
- Published static assets: `site-public/` (resume, favicon, and social icons)

Vite only copies `site-public/` into production builds. Unused starter-template source and assets remain local for reference; `.gitignore` keeps them out of a new GitHub repository.

The website began from an MIT-licensed portfolio template. The original copyright notice is preserved in `LICENSE`; the live design and portfolio content have been rebuilt for Ankush.
