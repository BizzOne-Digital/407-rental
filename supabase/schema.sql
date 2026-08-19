-- ═══════════════════════════════════════════════════════════════════════════
-- 407 Auto Rentals — CMS Database Schema
-- Run this in Supabase Dashboard → SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- Content storage (all site data as JSON documents)
create table if not exists cms_documents (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table cms_documents enable row level security;

-- Anyone can READ content (public website)
create policy "cms_public_read"
  on cms_documents for select
  using (true);

-- Only logged-in admins can INSERT / UPDATE / DELETE
create policy "cms_admin_insert"
  on cms_documents for insert
  to authenticated
  with check (true);

create policy "cms_admin_update"
  on cms_documents for update
  to authenticated
  using (true)
  with check (true);

create policy "cms_admin_delete"
  on cms_documents for delete
  to authenticated
  using (true);

-- Auto-update timestamp
create or replace function update_cms_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger cms_documents_updated
  before update on cms_documents
  for each row execute function update_cms_timestamp();

-- ─── Storage bucket for uploaded images ───────────────────────────────────
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'media',
  'media',
  true,
  10485760,  -- 10 MB
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
)
on conflict (id) do nothing;

-- Public can view images
create policy "media_public_read"
  on storage.objects for select
  using (bucket_id = 'media');

-- Admins can upload images
create policy "media_admin_insert"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'media');

create policy "media_admin_update"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'media');

create policy "media_admin_delete"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'media');

-- Enable realtime so all visitors see changes immediately
alter publication supabase_realtime add table cms_documents;
