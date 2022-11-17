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

## Static (with ISR) and Dynamic Rendering
- `getServerSideProps` and `getStaticProps` are now removed. We directly call the API in component itself and then specify in cache property of fetch API if rendering is static or dynamic. `force-cache` is static(default)  and `no-store` is dynamic. 
  - If we want use non-fetch library or ODM etc, we can specify rendering behavior
  ```javascript
  export const dynamic = 'auto'
    // 'auto' | 'force-dynamic' | 'error' | 'force-static'
  ```