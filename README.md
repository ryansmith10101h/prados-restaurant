# Prados Restaurant & Bar

Premium production website for Prados Restaurant & Bar, Magodo Phase 2, Lagos.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
3. Run `npm install`
4. Run the Supabase migrations in `supabase/migrations/`
5. Run `npm run dev`

## Environment Variables

See `.env.example` for required variables.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/            # Public-facing site
│   ├── admin/             # Protected admin dashboard
│   └── api/               # API routes
├── components/
│   ├── ui/                # Reusable UI primitives
│   ├── sections/          # Homepage/page sections
│   └── admin/             # Admin components
├── lib/
│   ├── supabase/          # Supabase client utilities
│   ├── constants.ts       # Business constants
│   └── utils.ts           # Utility functions
└── types/                 # TypeScript type definitions
```

## Database Schema

See `supabase/migrations/` for the complete database schema.

## Deployment

This project is configured for Vercel deployment.
Add environment variables in Vercel project settings.
