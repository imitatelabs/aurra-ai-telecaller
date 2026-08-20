-- Migration to update public.waitlist table with email, phone, updated_at and unique index on email

ALTER TABLE public.waitlist 
  ADD COLUMN IF NOT EXISTS email TEXT,
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Create unique index on email to prevent duplicate waitlist submissions
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_unique_idx ON public.waitlist (email) WHERE email IS NOT NULL;
