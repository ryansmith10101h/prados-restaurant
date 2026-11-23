// Database types matching Supabase schema

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface MenuItem {
  id: string;
  category_id: string;
  category?: MenuCategory;
  name: string;
  description: string | null;
  price: number | null;
  image_url: string | null;
  is_available: boolean;
  is_featured: boolean;
  dietary_tags: string[] | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: string | null;
  special_request: string | null;
  status: "pending" | "confirmed" | "cancelled";
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string | null;
  date: string;
  time: string | null;
  cover_image_url: string | null;
  reservation_link: string | null;
  is_active: boolean;
  status: "upcoming" | "ongoing" | "past";
  created_at: string;
}

export interface GalleryItem {
  id: string;
  title: string | null;
  image_url: string;
  category: "food" | "drinks" | "interior" | "atmosphere" | "events";
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string | null;
  email: string;
  subject: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface BusinessSetting {
  id: string;
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
}
