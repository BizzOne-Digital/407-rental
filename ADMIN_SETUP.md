# Admin Panel Setup Guide

This guide walks you through setting up the admin panel so the client can edit all website content (text, images, fleet, services, etc.) from a browser. Changes are saved to Supabase and appear instantly for all visitors on the live Vercel site.

---

## Overview

| Component | Purpose |
|-----------|---------|
| **Supabase** | Cloud database + file storage + admin authentication |
| **Admin Panel** | `/admin` — protected login for content management |
| **Public Website** | Reads content from Supabase in real time |

---

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up / log in
2. Click **New Project**
3. Choose a name (e.g. `407-auto-rentals`)
4. Set a strong database password (save it somewhere safe)
5. Pick a region close to your users (e.g. `Canada Central`)
6. Wait for the project to finish provisioning (~2 minutes)

---

## Step 2: Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy the entire contents of `supabase/schema.sql` from this project
4. Paste it into the SQL editor and click **Run**
5. You should see "Success" — this creates the content table, storage bucket, and security policies

---

## Step 3: Create an Admin User

1. In Supabase dashboard, go to **Authentication** → **Users**
2. Click **Add User** → **Create New User**
3. Enter the client's admin email and a strong password
4. Check **Auto Confirm User** (so they can log in immediately)
5. Click **Create User**

> **Important:** Share these credentials only with the client. This is the login for `/admin`.

---

## Step 4: Configure Environment Variables

### Local development

Create a `.env` file in the project root (copy from `.env.example`):

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: override form submission email
# VITE_RECIPIENT_EMAIL=407autorentals@gmail.com
```

**Where to find these values:**
- Supabase Dashboard → **Project Settings** → **API**
- Copy **Project URL** → `VITE_SUPABASE_URL`
- Copy **anon public** key → `VITE_SUPABASE_ANON_KEY`

### Vercel deployment

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add the same two variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Optionally add `VITE_RECIPIENT_EMAIL`
4. **Redeploy** the site after adding variables

---

## Step 5: Initialize Content

1. Run the site locally: `npm run dev`
2. Go to [http://localhost:5173/admin/login](http://localhost:5173/admin/login)
3. Log in with the admin credentials from Step 3
4. On the Dashboard, click **Initialize Default Content**
5. This loads all default website content into the database

After this, the client can edit everything from the admin sidebar.

---

## Step 6: Deploy to Vercel

```bash
npm run build
```

Push to GitHub and deploy on Vercel (or run `vercel` CLI). Make sure environment variables from Step 4 are set in Vercel before deploying.

---

## How It Works for the Client

1. Go to `https://your-site.vercel.app/admin/login`
2. Log in with email + password
3. Use the sidebar to edit:
   - **Business Info** — phone, email, address, social
   - **Homepage Hero** — headline, background image
   - **Fleet / Vehicles** — add/edit/remove vehicles with photo upload
   - **Services, Testimonials, Team, Gallery, FAQ, About** — full CRUD
4. Click **Save Changes** on any page
5. Changes go live immediately for all visitors (no cache issues)

### Image uploads

- Click **Upload from Computer** on any image field
- Images are stored in Supabase Storage (cloud)
- All visitors see the new image right away

---

## Changing the Company Email (Form Submissions)

Form submissions (booking + contact) are sent via FormSubmit.co.

**Option 1 — Admin Panel (recommended):**
1. Log in to `/admin`
2. Go to **Business Info**
3. Change the **Email** field
4. Save

**Option 2 — Environment variable:**
Set `VITE_RECIPIENT_EMAIL=your@email.com` in `.env` or Vercel.

**Option 3 — Code:**
Edit `src/data/defaults.ts` → `site.email` (used as fallback before Supabase loads).

> After changing the email, submit a test form once. FormSubmit will send an activation link to the new address — click it once to confirm.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Setup Required" on login page | Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env` |
| Can't log in | Verify admin user exists in Supabase → Authentication → Users |
| Save fails | Check browser console; ensure schema.sql was run |
| Image upload fails | Confirm `media` storage bucket exists (run schema.sql) |
| Changes not visible | Hard refresh (Ctrl+Shift+R); check Vercel env vars are set |
| Website shows default content | Run "Initialize Default Content" on admin dashboard |

---

## Security Notes

- Only authenticated users can write to the database (Row Level Security)
- Anyone can **read** content (required for the public website)
- The anon key is safe to expose in the frontend — write access requires login
- Never share the **service_role** key in frontend code

---

## Admin Routes

| Route | What it manages |
|-------|-----------------|
| `/admin` | Dashboard + first-time setup |
| `/admin/site` | Business name, phone, email, location |
| `/admin/hero` | Homepage hero section |
| `/admin/homepage` | Homepage section titles and copy |
| `/admin/fleet` | Vehicle inventory |
| `/admin/services` | Service listings |
| `/admin/testimonials` | Customer reviews |
| `/admin/team` | Team member profiles |
| `/admin/gallery` | Gallery images |
| `/admin/faq` | FAQ questions and answers |
| `/admin/about` | About page content |
