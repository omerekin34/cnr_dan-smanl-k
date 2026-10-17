-- Bize Katıl / job applications
-- Run this once in the Supabase SQL Editor.
-- Anonymous visitors can insert a row. They cannot read, update, or delete applications.

create extension if not exists pgcrypto;

create table if not exists public.job_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone_number text not null,
  location text not null,
  desired_fields text[] not null,
  has_experience boolean not null,
  driving_license text not null,
  work_preference text not null,
  additional_notes text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  constraint job_applications_full_name_len check (char_length(btrim(full_name)) between 2 and 160),
  constraint job_applications_phone_len check (char_length(btrim(phone_number)) between 10 and 40),
  constraint job_applications_location_len check (char_length(btrim(location)) between 1 and 160),
  constraint job_applications_fields_count check (
    cardinality(desired_fields) between 1 and 8
    and not exists (
      select 1
      from unnest(desired_fields) as field
      where char_length(btrim(field)) = 0 or char_length(field) > 80
    )
  ),
  constraint job_applications_license_len check (char_length(btrim(driving_license)) between 1 and 80),
  constraint job_applications_preference_len check (char_length(btrim(work_preference)) between 1 and 80),
  constraint job_applications_notes_len check (
    additional_notes is null or char_length(additional_notes) <= 4000
  ),
  constraint job_applications_status_check check (
    status in ('pending', 'reviewed', 'accepted', 'rejected')
  )
);

create index if not exists job_applications_created_at_idx
  on public.job_applications (created_at desc);

create or replace function public.job_applications_force_public_defaults()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  -- Public clients cannot choose a status or backdate the row.
  new.status := 'pending';
  new.created_at := now();
  return new;
end;
$$;

drop trigger if exists job_applications_force_public_defaults on public.job_applications;

create trigger job_applications_force_public_defaults
before insert on public.job_applications
for each row
execute function public.job_applications_force_public_defaults();

alter table public.job_applications enable row level security;

drop policy if exists "Anyone can submit a job application" on public.job_applications;

create policy "Anyone can submit a job application"
on public.job_applications
for insert
to anon, authenticated
with check (true);

revoke all on table public.job_applications from public, anon, authenticated;
grant insert on table public.job_applications to anon, authenticated;
