import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://halyxmewlimwrxmsnyey.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhbHl4bWV3bGltd3J4bXNueWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MDE0MjcsImV4cCI6MjA1MDI3NzQyN30.gi1xzEA0GuhBBDjo1BV0I9IdFh3naKiCDAMCr_OQaYs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock_quantity: number;
  created_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  status: string;
  total_amount: number;
  created_at: string;
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_at_time: number;
  created_at: string;
};