# Why Next.js?

Next.js is a powerful React framework that bridges the gap between frontend and backend development, providing developer-friendly features and performance optimizations.

---

## Why NOT Just React?

- In a plain React project, you have to maintain a **separate backend** for API routes.
- React does **not provide out-of-the-box routing** (requires `react-router-dom`).
- **Water falling problem** in data fetching can slow down performance.
- React is **not SEO-optimized** by default.

---

## What Next.js Offers

- **Server Side Rendering (SSR)** → Improves SEO and initial page load.
- **API Routes** → Single codebase for both **frontend and backend**.
- **File-based routing** → No need for `react-router-dom`.
- **Static Site Generation (SSG)** → Pre-renders pages at build time.
- **Bundle size optimization** → Faster loading times.
- **Backed by Vercel** → Active development and community support.

---

## Downsides of Next.js

- **Needs a running server** for SSR → Cannot be fully distributed via CDN (increases cost).
- **Opinionated architecture** → Hard to migrate away once you commit.

---

## Rendering Types

### Client-Side Rendering (CSR)
- Content is rendered in the **browser**.
- SEO is weaker because HTML is empty on initial load.

### Server-Side Rendering (SSR)
- Content is rendered on the **server** before sending to the browser.
- Strong SEO and faster first load.

---

## File-Based Routing / Page Routing

- Every file inside the `pages/` directory automatically becomes a route.

##  when you want to use react hooks use "use client"

## API routes

route.ts
***Layout***
---
### Backend route in NextJS
### Data fetching
### async components, server components 


- ***Route Groups=> ()***
- ***Dynamic Segments/ slug=> []***
- ***Catch-all Segments=> [...]***
- ***Middleware in NextJs***
- ***Static site generating***
- ***Hydration***

---


## Server side rendering
## Client side rendering
## Static site generation (tRY RUNNING NPM RUN BUILD)

---
## RFC
---
## Client Component and Server Components

---

## NextAuth ```npm install next-auth```
### why we cant do jwt + localstorage
### useSession hooks
### SessionProvider
#### signIn/ signOut
### getServerSession
