# Supabase Setup Instructions

## Step 1: Install Supabase Package

Open your terminal in the project directory and run:

```
bash
npm install @supabase/supabase-js
```

This will add the Supabase package to your dependencies.

## Step 2: Configure Supabase Client

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create a new project or select an existing one
3. Go to Project Settings > API
4. Copy the "Project URL" and "anon public" key
5. Replace the values in `src/supabaseClient.js`:

```
javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL'; // e.g., 'https://xyzabc123.supabase.co'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; // e.g., 'eyJhbGciOiJIUzI1NiIs...'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

## Step 3: Run SQL in Supabase Dashboard

1. Go to your Supabase project Dashboard
2. Click on "SQL Editor" in the left sidebar
3. Run the following SQL:

```
sql
-- Create profiles table to store user roles
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to read their own profile
CREATE POLICY "Users can read own profile" ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Create policy to allow admins to read all profiles
CREATE POLICY "Admins can read all profiles" ON profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create policy to allow users to update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Create policy to allow admins to update any profile
CREATE POLICY "Admins can update any profile" ON profiles
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Function to automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    'user'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## Step 4: Set Up Admin User

After signing up through the app, manually update your user role to 'admin' in the Supabase SQL Editor:

```
sql
-- Update your user to be an admin (replace with your email)
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

## How It Works

1. **Login/Signup Page**: Users can no longer select roles - they sign up with default 'user' role
2. **Database**: User roles are stored in the Supabase `profiles` table
3. **Dashboard**: Admins can view all users and change their roles using the dropdown

## Troubleshooting

If you see the error "Failed to resolve import @supabase/supabase-js", it means the package isn't installed. Run:
```
bash
npm install @supabase/supabase-js
