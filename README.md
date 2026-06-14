# Preview

https://shop-5grt.vercel.app/

# Shop — Product Catalog

A full-stack product catalog built with Next.js and Supabase. Users can browse products, register or sign in, add new listings, and edit or delete their own products — all with server-side rendering and server actions. The landing page presents a hero banner, feature highlights, tech stack overview, and architecture breakdown.

## Why this project is useful

- Demonstrates a **real-world full-stack pattern** using Next.js Server Actions, Supabase Auth, and a PostgreSQL database — no separate backend needed.
- Showcases **modern React 19 features** like `useActionState` for form handling and `useRef` for form resets.
- Uses **Radix UI Themes** for a polished, accessible UI with a dark theme out of the box.
- Serves as a **portfolio-ready reference** for authentication flows, CRUD operations, protected routes, server-vs-client component architecture, and mobile-responsive design in Next.js.
- Landing page built from **extracted, reusable components** demonstrating clean component composition and separation of concerns.

## Implemented features

### App

- **User authentication** — sign up, sign in, and sign out via Supabase Auth (`actions/auth.ts`)
- **Product CRUD** — create, read, update, and delete products using Supabase PostgreSQL (`actions/products.ts`)
- **Protected routes** — the `/products` page redirects unauthenticated users to the login page (`app/products/page.tsx`)
- **Product listing** — server-rendered list of products sorted by creation date (`app/components/ProductList.tsx`)
- **Product detail page** — individual product view with full details and action buttons (`app/products/[id]/page.tsx`)
- **Edit popup** — modal dialog for editing products using Radix UI Dialog (`app/components/EditPopup.tsx`)
- **Add product form** — form with `useActionState` and auto-reset on success (`app/add-product/page.tsx`)
- **Auth forms** — tabbed sign-in / sign-up interface (`app/login/auth-forms.tsx`)
- **Dark theme** — consistent dark appearance via Radix UI Themes (`app/layout.tsx`)

### Landing page

- **Hero section** — gradient hero with "Product Catalog" title, description, and CTA buttons linking to `/products` and `/login` (`app/components/HeroSection.tsx`)
- **Features section** — "What's Inside" block with icon cards for Auth, CRUD, Catalog, Detail Pages, Protected Routes, and Modern React 19 (`app/components/FeaturesSection.tsx` → `FeaturesList.tsx` → `FeatureCard.tsx`)
- **Tech stack section** — grid of technology cards (Next.js 16, React 19, TypeScript, Supabase, Tailwind, Radix UI) (`app/components/TechStackSection.tsx` → `TechStackList.tsx` → `TechStackCard.tsx`)
- **Architecture highlights** — bullet list covering Server Actions, React Server Components, Supabase Auth + SSR, and Radix UI Themes (`app/components/ArchitectureSection.tsx`)
- **Collapsible "Additional Info"** — toggle button reveals SVG donut chart (75% built by me / 25% AI-assisted) and GitHub link cards (`app/components/AdditionalInfo.tsx`)

### Mobile responsiveness

- **MainHeader** — hamburger menu toggle with animated icon (Radix UI `HamburgerMenuIcon` / `Cross1Icon`), desktop nav hidden on mobile, vertical drawer with tap-to-close (`app/components/MainHeader.tsx`)
- **Forms** (add-product, login, signup) — constrained with `max-w-lg mx-auto`, responsive padding and titles
- **ProductCard** — responsive padding, text, and image sizing
- **ActionButtons** — stack vertically on mobile (`flex-col sm:flex-row`)
- **EditPopup** — responsive dialog width
- **Product detail page** — action buttons not absolutely positioned on mobile
- **Products page** — horizontal padding added
- **Auth tabs** — responsive max-width and text sizing
- **MainFooter** — responsive padding and text
- **ProductList** — responsive heading and padding

### Visual details

- **Logo** — dotted white border (`border-2 border-white/50 border-dotted`), no background fill
- **Dark theme** — consistent dark appearance via Radix UI Themes (`app/layout.tsx`)

## Tech stack

| Layer              | Technology                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| Framework          | [Next.js](https://nextjs.org) 16.2.9 (App Router)                                                   |
| UI Library         | [React](https://react.dev) 19.2.4                                                                   |
| Language           | [TypeScript](https://www.typescriptlang.org) 5                                                      |
| Styling            | [Tailwind CSS](https://tailwindcss.com) v4 + [Radix UI Themes](https://www.radix-ui.com/themes) 3.3 |
| Icons              | [Radix UI Icons](https://www.radix-ui.com/icons) 1.3                                                |
| Backend / Database | [Supabase](https://supabase.com) (Auth + PostgreSQL)                                                |
| Linting            | [ESLint](https://eslint.org) 9 with `eslint-config-next`                                            |
| Fonts              | Geist / Geist Mono via `next/font`                                                                  |

## Getting started

### Prerequisites

- Node.js 18+
- A Supabase project (free tier works)

### 1. Clone and install dependencies

```bash
git clone <repo-url>
cd shop
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```bash
SUPABASE_URL=<your-supabase-project-url>
SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

Both values are available in your Supabase project dashboard under **Settings → API**.

### 3. Set up the database table

Run the following SQL in the Supabase SQL Editor:

```sql
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_name text NOT NULL,
  product_price numeric NOT NULL,
  product_description text,
  product_country text,
  product_size text,
  product_color text,
  phone text,
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now()
);
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script  | Command      | Description              |
| ------- | ------------ | ------------------------ |
| `dev`   | `next dev`   | Start development server |
| `build` | `next build` | Production build         |
| `start` | `next start` | Start production server  |
| `lint`  | `eslint`     | Run ESLint               |

## Project structure

```
shop/
├── actions/
│   ├── auth.ts              # Server Actions: signUp, signIn, signOut, getUser
│   └── products.ts          # Server Actions: createProduct, deleteProduct, updateProduct
├── api/
│   └── client.js            # Supabase browser client
├── app/
│   ├── globals.css          # Tailwind + Radix imports
│   ├── layout.tsx           # Root layout with dark Theme, Header, Footer
│   ├── page.tsx             # Home page (composes all landing sections)
│   ├── add-product/
│   │   └── page.tsx         # Add product form (client component)
│   ├── components/
│   │   ├── ActionButtons.tsx    # Delete / Edit buttons with popup
│   │   ├── AdditionalInfo.tsx   # Collapsible section with donut chart & GitHub links
│   │   ├── ArchitectureSection.tsx # Architecture highlights bullet list
│   │   ├── EditPopup.tsx        # Radix Dialog form for editing
│   │   ├── FeatureCard.tsx      # Single feature card (icon + title + description)
│   │   ├── FeaturesList.tsx     # Features data array + grid of FeatureCards
│   │   ├── FeaturesSection.tsx  # "What's Inside" block with heading + FeaturesList
│   │   ├── GitHubLinks.tsx      # GitHub repository & profile link cards
│   │   ├── HeroSection.tsx      # Gradient hero banner with CTAs
│   │   ├── MainFooter.tsx       # Footer
│   │   ├── MainHeader.tsx       # Navigation header with hamburger menu on mobile
│   │   ├── ProductCard.tsx      # Product card for the list
│   │   ├── ProductList.tsx      # Server component that fetches and lists products
│   │   ├── TechStackCard.tsx    # Single tech item card (name + description)
│   │   ├── TechStackList.tsx    # Tech stack data array + grid of TechStackCards
│   │   └── TechStackSection.tsx # "Tech Stack" block with heading + TechStackList
│   ├── lib/
│   │   ├── server.ts        # Supabase server client (cookies-based SSR)
│   │   └── types.ts         # Product type definition
│   ├── login/
│   │   ├── auth-forms.tsx   # Tabs: Sign In / Sign Up
│   │   ├── login-form.tsx   # Sign In form
│   │   ├── page.tsx         # Login page (server, checks auth state)
│   │   └── signup-form.tsx  # Sign Up form
│   └── products/
│       ├── page.tsx         # Products list page (protected)
│       └── [id]/
│           └── page.tsx     # Single product detail page
├── proxy.ts                 # Middleware (currently without active matchers)
├── next.config.ts           # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Usage example

1. **Sign up** — navigate to `/login`, switch to **Sign Up**, enter email and password.
2. **Add a product** — go to `/add-product`, fill in name, price, description, country, size, color, and phone, then submit.
3. **Browse products** — visit `/products` to see all listings sorted newest-first.
4. **View details** — click any product card to see its full details at `/products/<id>`.
5. **Edit / Delete** — on the product detail page, use the **Edit** button to open the edit popup or the **Remove** button to delete.

## Where to get help

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Radix UI Themes](https://www.radix-ui.com/themes/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

## Maintainers and contribution

This project is maintained for portfolio and learning purposes. Contributions, issues, and feature requests are welcome — feel free to open an issue or submit a pull request.

For contribution guidelines, see the repository's contributing guide if available.
