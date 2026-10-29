# AI-LOG: Architecture, Engineering & Development Records

 **Project**: VÉLÈNE Atelier — Refined Living Accessories Storefront  
 **Stack**: Next.js 15 (App Router), React 19, Tailwind CSS v4 (`@tailwindcss/postcss`), Shopify Storefront GraphQL  
 **Status**: Production Ready

 ## 1. Architectural Decisions (ADR)

 ### ADR 001: Next.js 15 App Router & React Server Components (RSC)
 - **Context**: The storefront targets the ultra-luxury demographic where Core Web Vitals (LCP, CLS, FID/INP), SEO indexing, and editorial typography are critical.
 - **Decision**: Built the main landing page (`app/page.tsx`) as an asynchronous React Server Component. Product queries are resolved on the server with cache revalidation set to `60` seconds.
 - **Consequence**: Zero client-side JavaScript overhead for static brand storytelling and catalog layout. Interactive client boundaries are isolated to `Navbar.tsx`, `CartDrawer.tsx`, and `NewsletterForm.tsx`.

 ### ADR 002: Dual-Mode GraphQL Client with Self-Healing Fallback
 - **Context**: Local development, CI environments, and client handoffs frequently break when external API keys are expired, invalid, or omitted.
 - **Decision**: Implemented an automated fallback layer in `lib/shopify/index.ts`. If `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` or `SHOPIFY_STOREFRONT_ACCESS_TOKEN` is unset or fails at network time, the runtime falls back gracefully to `MOCK_PRODUCTS` without crashing the page.
 - **Consequence**: The site is 100% testable out of the box on `localhost` without needing real Shopify API credentials.

 ### ADR 003: Tailwind CSS v4 & PostCSS Bridge
 - **Context**: Tailwind CSS v4 moves away from `tailwind.config.js` to an `@import "tailwindcss";` CSS-first configuration model.
 - **Decision**: Integrated `@tailwindcss/postcss` with `postcss.config.mjs` and declared CSS color tokens directly inside `app/globals.css`.
 - **Consequence**: Lightning-fast build times, reduced configuration overhead, and unified CSS variable management for stone/mineral color palettes.

 ### ADR 004: Server Actions Over REST Route Handlers
 - **Context**: Need to support cart additions and email signups without maintaining separate API endpoints (`/api/cart`, `/api/newsletter`).
 - **Decision**: Utilized Next.js 15 Server Actions via React 19's `useActionState` hook in `app/actions/cart.ts` and `app/actions/newsletter.ts`.
 - **Consequence**: End-to-end type safety, native form submission support without JavaScript enabled, and streamlined state handling for interactive forms.

---

 ## 2. Refactoring & Structure Changes

 ### Transition from Root Components to `app/components/`
 - **Observation**: Components were initially placed at the root level, causing clutter and potential route resolution issues.
 - **Resolution**: Grouped all components under `app/components/`, separating presentation concerns from business logic:
 - `Navbar.tsx` & `CartDrawer.tsx`: UI navigation and cart management.
 - `ProductGrid.tsx`: Dynamic catalog with action triggers.
 - `HeroSection.tsx` & `EditorialBanner.tsx`: Static marketing presentation.
 - `NewsletterForm.tsx`: Form UI using `useActionState`.
 - **Path Resolution**: Fixed `@/app/components/*` import mappings inside `app/page.tsx` and `app/components/Navbar.tsx`.

---

 ## 3. Performance & Design System Audit

 ### Color Palette Strategy
 The UI uses an earthy, tactile palette to match the physical products (alabaster, travertine, aged bronze, raw wool):
 - **Base Canvas**: `#FAF8F5` (Off-white / Warm Plaster)
 - **Primary Typography**: `#1E1B18` (Obsidian / High Contrast Dark)
 - **Secondary Tone**: `#564E47` / `#6B635B` (Muted Umber)
 - **Accent Details**: `#8C827A` (Sandstone Grey)
 - **Containers**: `#EFECE6` (Pale Limestone)

 ### Image Optimization Rules
 All imagery uses Next.js `<Image>` with:
 - Strict responsive `sizes` definitions to eliminate layout shift (CLS).
 - WebP/AVIF output enabled in `next.config.ts`.
 - Priority loading enabled on the hero fold.

---

 ## 4. Verification Checklist

 | Check | Expected Behavior | Status |
 | :--- | :--- | :--- |
 | Zero-Config Localhost | App renders catalog without Shopify API tokens | PASSED |
 | Tailwind CSS v4 Compiling | Styles load properly via `@tailwindcss/postcss` | PASSED |
 | Cart Interaction | Drawer opens/closes and accepts item additions | PASSED |
 | Newsletter Server Action | Validates email address format and returns feedback | PASSED |
 | External Image Rendering | Unsplash and Shopify domains pass validation | PASSED |

---

 ## 5. Future Roadmap

 1. **Dynamic Dynamic PDPs**: Add `app/products/[handle]/page.tsx` for standalone product detail views.
 2. **Shopify Cart Integration**: Connect the Server Action directly to the `cartCreate` and `cartLinesAdd` GraphQL mutations.
 3. **Collector Search**: Implement a keyboard-driven search palette with command-bar UX.
 4. **Localization**: Add multi-currency and multi-language routing using Next.js localized sub-paths (`/fr`, `/ja`, `/en`).