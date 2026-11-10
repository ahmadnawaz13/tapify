# Tapify

An open-source profile page and link hub builder. Tapify gives people one friendly place to gather their work, projects, and favorite links.

> **Project status:** This repository is an early, front-end-only starter. It includes a responsive 10-page website and a profile editor demo. The editor saves drafts in the current browser; account creation, publishing, analytics, and a hosted service are not implemented.

## Pages

1. Home (`/`)
2. Features (`/features`)
3. Templates (`/templates`)
4. Explore example pages (`/explore`)
5. Profile editor (`/create`)
6. Pricing and project scope (`/pricing`)
7. About (`/about`)
8. Journal (`/blog`)
9. Journal article (`/blog/make-a-link-page-that-feels-like-you`)
10. Contact and FAQs (`/contact`)

## Run locally

Requirements: Node.js 18 or later and npm.

```bash
npm install
npm run dev
```

To make a production build:

```bash
npm run build
npm run preview
```

## Stack

- React 18 and TypeScript
- Vite
- React Router
- Lucide icons
- Plain CSS with responsive layouts and reduced-motion support

## Profile editor demo

The editor lets you change a sample name, bio, handle, theme, and links. It writes the draft to `localStorage` in your browser. No account, API, analytics, or server is connected. The displayed share URL is illustrative and does not publish a profile.

## Contributing

Small, focused improvements are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request. Be kind, explain the change, and include screenshots when a visual change is involved.

## License

Tapify is available under the [MIT License](LICENSE).
