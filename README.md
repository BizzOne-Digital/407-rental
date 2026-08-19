# 407 Auto Rentals

Premium vehicle rental website for 407 Auto Rentals — insurance replacement and car rentals in the Greater Toronto Area.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- Supabase (CMS, auth, image storage)
- FormSubmit.co (form email delivery)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Admin Panel

The client can manage all website content at `/admin`. See **[ADMIN_SETUP.md](./ADMIN_SETUP.md)** for full setup instructions (Supabase, admin user, environment variables).

```bash
# Required for admin panel — create .env from .env.example
cp .env.example .env
# Add your Supabase URL and anon key, then:
npm run dev
# Visit http://localhost:5173/admin/login
```

## Build

```bash
npm run build
npm run preview
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with full conversion funnel |
| `/about` | About the company |
| `/services` | All rental services |
| `/fleet` | Vehicle inventory with category filtering |
| `/booking` | Rental request form |
| `/contact` | Contact form and info |
| `/testimonials` | Customer reviews (demo data) |
| `/faq` | Frequently asked questions |
| `/gallery` | Automotive gallery |
| `/team` | Team profiles (demo data) |
| `/admin` | Admin panel (protected) |

## Admin Panel

The admin panel lets the client update everything on the site without touching code:

- Business info (phone, email, address)
- Homepage hero and section copy
- Fleet / vehicles (with image upload from computer)
- Services, testimonials, team, gallery, FAQ, about page

**Setup:** See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for step-by-step Supabase configuration.

**How changes propagate:** Content is stored in Supabase. When the admin saves, all visitors on the live Vercel site see the update immediately (real-time sync, no browser cache).

## Customization

### Via Admin Panel (recommended)

Log in at `/admin` and edit content directly. No code changes needed.

### Via code (fallback defaults)

Default content lives in `src/data/defaults.ts`. These are used when Supabase is not configured, or as the starting point when initializing the database.

### Replace logo

Update `src/components/ui/Logo.tsx` with the client logo image.

### Connect forms to email

All form submissions are delivered via [FormSubmit.co](https://formsubmit.co) to the company email.

**Where to change the recipient email:**

1. **Primary (recommended):** Edit `src/data/site.ts`
   ```ts
   email: '407autorentals@gmail.com',  // ← change this
   ```

2. **Optional override:** Create a `.env` file (see `.env.example`)
   ```
   VITE_RECIPIENT_EMAIL=your-new@email.com
   ```

**One-time activation (required):**

The first time a form is submitted, FormSubmit sends an activation link to the company email inbox. Click that link once — after that, all future submissions arrive automatically.

**Forms that send email:**

| Form | Page | Email subject |
|------|------|---------------|
| Booking / Rental Request | `/booking` | `🚗 New Rental Request — [Name]` |
| Contact | `/contact` | `📩 Contact Inquiry — [Subject]` |

Customers also receive an automatic confirmation email after submitting.

**Email formatting:** Professional table layout with all form fields, reply-to set to the customer's email.

## Brand Colors

- Primary Orange: `#F58220`
- Black: `#000000`
- White: `#FFFFFF`
- Dark Grey: `#333333`
