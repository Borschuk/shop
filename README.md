# Preview

https://shop-5grt.vercel.app/

# Shop — Product Catalog

A full-stack product catalog built with Next.js and Supabase. Users can browse products, register or sign in, add new listings, and edit or delete their own products — all with server-side rendering and server actions.

## Why this project is useful

- Demonstrates a **real-world full-stack pattern** using Next.js Server Actions, Supabase Auth, and a PostgreSQL database — no separate backend needed.
- Showcases **modern React 19 features** like `useActionState` for form handling and `useRef` for form resets.
- Uses **Radix UI Themes** for a polished, accessible UI with a dark theme out of the box.
- Serves as a **portfolio-ready reference** for authentication flows, CRUD operations, protected routes, and server-vs-client component architecture in Next.js.

## Implemented features

- **User authentication** — sign up, sign in, and sign out via Supabase Auth (`actions/auth.ts`)
- **Product CRUD** — create, read, update, and delete products using Supabase PostgreSQL (`actions/products.ts`)
- **Protected routes** — the `/products` page redirects unauthenticated users to the login page (`app/products/page.tsx`)
- **Product listing** — server-rendered list of products sorted by creation date (`app/components/ProductList.tsx`)
- **Product detail page** — individual product view with full details and action buttons (`app/products/[id]/page.tsx`)
- **Edit popup** — modal dialog for editing products using Radix UI Dialog (`app/components/EditPopup.tsx`)
- **Add product form** — form with `useActionState` and auto-reset on success (`app/add-product/page.tsx`)
- **Auth forms** — tabbed sign-in / sign-up interface (`app/login/auth-forms.tsx`)
- **Dark theme** — consistent dark appearance via Radix UI Themes (`app/layout.tsx`)
- **Responsive navigation** — header with links to Home, Products, Add Product, and Login (`app/components/MainHeader.tsx`)

## Tech stack

| Layer              | Technology                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| Framework          | [Next.js](https://nextjs.org) 16.2.9 (App Router)                                                   |
| UI Library         | [React](https://react.dev) 19.2.4                                                                   |
| Language           | [TypeScript](https://www.typescriptlang.org) 5                                                      |
| Styling            | [Tailwind CSS](https://tailwindcss.com) v4 + [Radix UI Themes](https://www.radix-ui.com/themes) 3.3 |
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
│   ├── page.tsx             # Home page
│   ├── add-product/
│   │   └── page.tsx         # Add product form (client component)
│   ├── components/
│   │   ├── ActionButtons.tsx # Delete / Edit buttons with popup
│   │   ├── EditPopup.tsx     # Radix Dialog form for editing
│   │   ├── MainFooter.tsx    # Footer
│   │   ├── MainHeader.tsx    # Navigation header
│   │   ├── ProductCard.tsx   # Product card for the list
│   │   └── ProductList.tsx   # Server component that fetches and lists products
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
