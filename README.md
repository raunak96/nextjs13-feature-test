# Next.js 13 Changes
## Routing and Page Structure
- All Pages now come under app directory.![Route Structure](https://assets.vercel.com/image/upload/f_auto,q_100,w_1600/v1667553431/nextjs-docs/darkmode/route-segments-to-path-segments.png).
- Index Route under a folder is now called `page.tsx`. ![Page Structure](https://assets.vercel.com/image/upload/f_auto,q_100,w_1600/v1666568301/nextjs-docs/darkmode/defining-routes-page.js.png)
- Anything inside app directory is by default `server component`. Only if our component requires some event handling, state management/lifecycle methods, hooks or browser APIs we use client component by explicitly specifying it as so.

- There are some reserved components for each route inside app.
  1. layout - UI shared b/w all routes inside this route.
  2. head - allows to configure head tag(meta and title).
  3. page - page(UI) of that Route.
  4. loading - A loading file can create instant loading states built on React Suspense.
  5. error - An error file defines an error boundary for a route segment.