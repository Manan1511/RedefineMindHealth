-- Create a public storage bucket for gallery photos
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

-- Allow anyone to read gallery images (bucket is public, but policy needed for the API)
create policy "public read gallery"
  on storage.objects for select
  using (bucket_id = 'gallery');

-- Allow uploads (admin password is enforced client-side, matching the rest of the admin)
create policy "public upload gallery"
  on storage.objects for insert
  with check (bucket_id = 'gallery');

-- Allow deletes (for removing photos from the admin)
create policy "public delete gallery"
  on storage.objects for delete
  using (bucket_id = 'gallery');
