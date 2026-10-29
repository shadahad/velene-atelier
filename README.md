# VÉLÈNE Atelier — Refined Living Accessories Storefront

[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0.9-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Shopify API](https://img.shields.io/badge/Shopify_Storefront_GraphQL-2025--01-7AB55C?style=flat&logo=shopify)](https://shopify.dev/docs/api/storefront)

A production-ready headless luxury e-commerce storefront for spatial accessories and heirloom home objects. Built on **Next.js 15 (App Router)**, **React 19 Server Components (RSC)**, **Server Actions**, and the **Shopify Storefront GraphQL API**.

The application features a **Dual-Mode Data Engine**: it runs locally out of the box with zero configuration using a high-fidelity mock dataset and automatically transitions to live Shopify inventory once production credentials are supplied.

---

## Key Features

- **Next.js 15 App Router Architecture**: Optimized with React Server Components (RSC) for maximum Core Web Vitals scores and minimal client runtime overhead.
- **Shopify Storefront GraphQL Integration**: Resilient client layer with automatic failover to local fallback data when offline or unconfigured.
- **Server Actions Mutation Layer**: Cart additions and newsletter registrations leverage React 19's `useActionState` and Server Actions, eliminating the need for boilerplate REST route handlers.
- **Tailwind CSS v4 Engine**: Configured via `@tailwindcss/postcss` for lightning-fast build cycles and modern CSS feature support.
- **Curated High-Res Media Pipeline**: Configured with Next.js remote patterns supporting Unsplash and Shopify CDN assets with automatic WebP/AVIF formatting.
- **Luxury Editorial UI**: Mobile-responsive, minimal layout including sticky navigation, animated cart drawer, curated product catalog, and craft manifesto sections.

---

## File System Overview

```text
velene-atelier/
├── app/
│   ├── actions/
│   │   ├── cart.ts               # Server Action: Basket line reservations
│   │   └── newsletter.ts         # Server Action: Subscriber registration
│   ├── components/
│   │   ├── CartDrawer.tsx        # Interactive slide-over cart panel
│   │   ├── EditorialBanner.tsx   # Material manifesto & brand heritage block
│   │   ├── Footer.tsx            # Atelier directory & correspondence form
│   │   ├── HeroSection.tsx       # Above-the-fold brand narrative & imagery
│   │   ├── Navbar.tsx            # Sticky header, mobile nav & bag trigger
│   │   ├── NewsletterForm.tsx    # Client-side form with server action state
│   │   └── ProductGrid.tsx       # Dynamic collection grid & acquisition triggers
│   ├── globals.css               # Tailwind CSS v4 entry & CSS design tokens
│   ├── layout.tsx                # Base HTML layout, metadata & global fonts
│   └── page.tsx                  # Root RSC page (data pre-fetching engine)
├── lib/
│   ├── shopify/
│   │   ├── index.ts              # Storefront GraphQL client with mock failover
│   │   ├── mock-data.ts          # High-fidelity architectural catalog data
│   │   └── types.ts              # TypeScript interfaces for products and cart
│   └── utils.ts                  # Currency formatting & string utilities
├── .env.local                    # Environment configuration (Mock vs. Live)
├── next.config.ts                # Next.js configuration (Remote image domains)
├── package.json                  # Project dependencies & build scripts
├── postcss.config.mjs            # PostCSS configuration for Tailwind v4
├── tsconfig.json                 # Strict TypeScript configuration
└── AI-LOG.md                     # Architecture logs and engineering records  
```
## Quick Start (Local Development)
 ### 1. Prerequisites
 - **Node.js**: v20.x or higher
 - **Package Manager**: npm, pnpm, or yarn

  ### 2. Installation
  Clone the repository and install the dependencies:

  ```bash
  git clone https://github.com/your-username/velene-atelier.git
  cd velene-atelier
  npm install
  ```
  ### 3. Environment Configuration
 The repository includes a sample `.env.local` configured for local mock evaluation:
 
 ```bash
 NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
 SHOPIFY_STOREFRONT_ACCESS_TOKEN=
 SHOPIFY_API_VERSION="2025-01"
 NEXT_PUBLIC_SITE_NAME="VÉLÈNE Atelier"
 ```
 Leaving NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN blank automatically activates the built-in catalog mock engine.
 
 ### 4. Run Development Server
 ```bash 
 npm run dev
 ```
 Open http://localhost:3000 to view the storefront.

## Transitioning to Live Production Shopify
 To link this storefront directly to a live Shopify store:
 ### 1. Generate Storefront API Credentials
 1. Go to your **Shopify Admin** (https://admin.shopify.com/store/<your-store-handle>).
 2. Navigate to **Settings > Apps and sales channels > Develop apps**.
 3. Click **Create an app** (Name: VÉLÈNE Storefront).
 4. Select **Configure Storefront API scopes** and enable:
    - unauthenticated_read_product_listings
    - unauthenticated_read_product_inventory
    - unauthenticated_write_checkouts
    - unauthenticated_write_customers
 5. Click **Install App** and copy the **Storefront API access token**.
 
### 2. Update Production Environment Variables
 Set the following keys in your deployment provider (Vercel, Netlify, Cloudflare, AWS Amplify) or in your production `.env.local`:

 ```env
 NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN="<your-store-handle>.myshopify.com"
 SHOPIFY_STOREFRONT_ACCESS_TOKEN="shpua_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
 SHOPIFY_API_VERSION="2025-01"
 ```
The data layer in lib/shopify/index.ts will automatically detect these credentials and route requests directly to Shopify's edge GraphQL network instead of the mock data.

## Available Scripts

 | Script | Purpose |
 |------|-----|
 | `npm run dev` | Starts local Next.js dev server on http://localhost:3000 |
 | `npm run build` | Compiles production bundle with static optimization |
 | `npm run start` | Boots the compiled production server |
 | `npm run lint` | Runs Next.js ESLint verification |

## Security Best Practices

 - **Token Isolation**: The SHOPIFY_STOREFRONT_ACCESS_TOKEN is kept server-side inside RSC requests and Server Actions, avoiding client-bundle exposure.
 - **Origin Isolation**: Only images from approved CDNs (images.unsplash.com, cdn.shopify.com) are allowed through Next.js Image Optimization.