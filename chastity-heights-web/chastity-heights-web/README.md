# Chastity Heights — Official Archive

A modular, responsive React + TypeScript + Vite website concept for **Chastity Heights**, built around the series overview, character sheet, Episode 1 storyboard, campus map, and Quadric Circle sigil supplied with the brief.

## Experience highlights

- Cinematic hero with layered parallax, grain, and scroll-reactive depth
- Responsive sticky navigation and active-section tracking
- Interactive archive tabs: Series / Characters / Episodes / Campus
- Cast cards with profile detail modals
- Season One episode selector
- Campus map reference and Quadric Circle lore section
- In-world anonymous account terminal with a fictional post feed
- Wallet connect UI for an injected EVM wallet (e.g. MetaMask); **connect only, no transactions**
- Reduced-motion support, keyboard-accessible controls, responsive layout

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

Production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository settings, enable GitHub Pages using GitHub Actions, or deploy the `dist/` directory using your preferred workflow.
3. If deploying under a repository subpath, set `base: "/YOUR-REPO-NAME/"` in `vite.config.ts` before building.
4. A custom domain such as `chastityhigh.com` can be attached in GitHub Pages settings by adding the domain and configuring the DNS records at your registrar.

For a custom domain, check current GitHub Pages instructions before changing DNS.

## Project structure

```text
src/
  components/
    Header.tsx
    Hero.tsx
    ArchiveSection.tsx
    CastSection.tsx
    EpisodesSection.tsx
    CampusSection.tsx
    SignalSection.tsx
    Footer.tsx
    WalletConnect.tsx
  data/
    series.ts
  hooks/
    useScrollProgress.ts
  styles/
    global.css
  App.tsx
  main.tsx
public/
  assets/
    orientation-storyboard.png
    character-design-sheet.png
    quadric-circle-sigil.png
    campus-map-reference.png
    series-overview.docx
```

## Content / canon notes

The site treats the uploaded series overview as the primary reference. It uses the stated premise, the three campus worlds (The Heights, The City Below, The Undercroft), the Chastity Pact and Mnemonic Engine, and the proposed cast. Some names and character mappings on the visual reference sheet are not fully explicit, so the site avoids pretending every portfolio-sheet number is definitively tied to a named character.

## Production checklist before launch

- Replace the concept email and social links with real accounts.
- Add approved trailers, episode art, and accessibility-reviewed alt text.
- Add a privacy policy, cookie notice if needed, and analytics consent before deploying tracking.
- Wallet connect is an optional fan identity experiment. It does not mint, sell, or transfer anything. Do not add transactions without a separate security, legal, and product review.
- The anonymous feed is fictional demo content, not a live social network.
- Confirm rights and clearances for all art, marks, names, and domain assets.
