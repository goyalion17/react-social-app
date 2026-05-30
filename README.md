# React Social App

A small React social-app demo with a header, a side navigation powered by React
Router, and a profile page with posts. Originally bootstrapped with Create React
App (`react-scripts@4`), now fully migrated to a modern Vite + React 19 stack
with linting, formatting, and unit tests.

## Stack

| Area     | Tool                                                   |
| -------- | ------------------------------------------------------ |
| Build    | [Vite 8](https://vitejs.dev/) + `@vitejs/plugin-react` |
| UI       | React 19                                               |
| Router   | React Router 7 (`BrowserRouter`, `NavLink`)            |
| Lint     | ESLint 9 (flat config) + `eslint-plugin-react(-hooks)` |
| Format   | Prettier 3                                             |
| Tests    | Vitest 4 + Testing Library                             |
| Test env | jsdom                                                  |

## Security

`npm audit` reports **0 vulnerabilities** after the migration. The original
CRA-based project produced 195 vulnerabilities (19 critical, 54 high, 116
moderate, 6 low), all coming from outdated `react-scripts@4` transitive
dependencies.

## Requirements

- Node.js **>= 22.12** (Vite 8 requirement)
- npm **>= 10**

## Quick start

```bash
npm install
npm run dev      # open http://localhost:3000
```

## Scripts

| Script                 | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start the Vite dev server on port 3000 |
| `npm run build`        | Build a production bundle into `dist/` |
| `npm run preview`      | Preview the production build locally   |
| `npm run lint`         | Run ESLint over the project            |
| `npm run lint:fix`     | Run ESLint with auto-fix               |
| `npm run format`       | Apply Prettier to the project          |
| `npm run format:check` | Check formatting without writing       |
| `npm run test`         | Run Vitest in watch mode               |
| `npm run test:run`     | Run Vitest once (used by CI)           |
| `npm run test:ui`      | Open the Vitest UI                     |
| `npm run coverage`     | Generate a coverage report             |

## Project structure

```
react-social-app/
├── index.html                # Vite entry HTML
├── public/                   # Static assets served as-is
├── src/
│   ├── main.jsx              # Bootstraps React + BrowserRouter
│   ├── App.jsx               # Layout + route definitions
│   ├── App.css               # Layout styles
│   ├── index.css             # Global styles
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.test.jsx
│   │   ├── Navbar.jsx
│   │   └── Navbar.test.jsx
│   ├── pages/
│   │   ├── Profile.jsx
│   │   ├── Messages.jsx
│   │   ├── News.jsx
│   │   ├── Music.jsx
│   │   └── Settings.jsx
│   └── test/
│       └── setup.js          # @testing-library/jest-dom + cleanup
├── eslint.config.js          # ESLint flat config
├── vite.config.js            # Vite + Vitest config
└── package.json
```

## Testing

Tests live next to the components they cover (`*.test.jsx`). Vitest runs in a
`jsdom` environment, with `@testing-library/jest-dom` matchers and an automatic
`cleanup()` after every test (see [`src/test/setup.js`](src/test/setup.js)).

Run all tests once:

```bash
npm run test:run
```

## What changed compared to the original

- Replaced `react-scripts@4` (CRA, deprecated) with **Vite 8 + `@vitejs/plugin-react`**
- Upgraded **React 17 → 19** (new `createRoot` API, no more global `React` import)
- Added **React Router v7** with five real routes (`/profile`, `/messages`,
  `/news`, `/music`, `/settings`) instead of empty `<a href="">` links
- Replaced the inline base64 JPEG and the broken Webflow image URL with stable
  `picsum.photos` placeholders, and added `alt` attributes to every `<img>`
- Fixed a CSS typo (`2f 10fr` → proper grid columns), removed the fixed
  `1920px` width and added a mobile breakpoint
- Replaced the broken default CRA test (`renders learn react link`) with real
  Header and Navbar tests
- Added **ESLint 9** flat config (`react`, `react-hooks`, `react-refresh`,
  `prettier`) and **Prettier 3**
- Added **Vitest 4** + **Testing Library** with a `jsdom` setup
- Brought `npm audit` from **195 vulnerabilities → 0**
