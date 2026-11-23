-- ===================================================
-- PRADOS RESTAURANT & BAR — SUPABASE DATABASE SCHEMA
-- ===================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. MENU CATEGORIES
CREATE TABLE IF NOT EXISTS menu_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. MENU ITEMS
CREATE TABLE IF NOT EXISTS menu_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES menu_categories(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(12, 2) NOT NULL,
    image_url TEXT,
    is_available BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    dietary_tags TEXT[],
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. RESERVATIONS
CREATE TABLE IF NOT EXISTS reservations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(20) NOT NULL,
    guests INT DEFAULT 2,
    occasion VARCHAR(100),
    special_request TEXT,
    status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. EVENTS
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date VARCHAR(100) NOT NULL,
    time VARCHAR(100),
    cover_image_url TEXT,
    reservation_link TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    status VARCHAR(30) DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'past')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. GALLERY ITEMS
CREATE TABLE IF NOT EXISTS gallery_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    image_url TEXT NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('food', 'drinks', 'interior', 'atmosphere', 'events')),
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. CONTACT MESSAGES
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. BUSINESS SETTINGS (Editable via Admin)
CREATE TABLE IF NOT EXISTS business_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key VARCHAR(100) UNIQUE NOT NULL,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ===================================================

ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_settings ENABLE ROW LEVEL SECURITY;

-- PUBLIC POLICIES (Read-only for public content, insert-only for bookings)
CREATE POLICY "Public can view active menu categories" ON menu_categories FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view available menu items" ON menu_items FOR SELECT USING (is_available = true);
CREATE POLICY "Public can view active events" ON events FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view active gallery" ON gallery_items FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view business settings" ON business_settings FOR SELECT USING (true);
CREATE POLICY "Public can create reservations" ON reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can send contact messages" ON contact_messages FOR INSERT WITH CHECK (true);

-- ADMIN AUTHENTICATED POLICIES (Full control for authenticated staff)
CREATE POLICY "Admins full control menu_categories" ON menu_categories FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full control menu_items" ON menu_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full control reservations" ON reservations FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full control events" ON events FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full control gallery_items" ON gallery_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full control contact_messages" ON contact_messages FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins full control business_settings" ON business_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ===================================================
-- INDEXES FOR PRODUCTION QUERY PERFORMANCE
-- ===================================================

CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_available ON menu_items(is_available);
CREATE INDEX IF NOT EXISTS idx_reservations_date ON reservations(date);
CREATE INDEX IF NOT EXISTS idx_reservations_status ON reservations(status);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery_items(category);

-- ===================================================
-- INITIAL SEED DATA
-- ===================================================

INSERT INTO business_settings (key, value) VALUES 
('contact_details', '{"name": "Prados Restaurant & Bar", "phone": "0904 169 5561", "whatsapp": "2349041695561", "street": "51 Alh. Bashorun Shittu Avenue", "area": "Magodo Phase 2", "city": "Lagos", "state": "Lagos State"}'),
('operating_hours', '{"weekdays": "12:00 PM – 11:00 PM", "weekends": "12:00 PM – 12:00 AM", "note": "Kitchen closes 1 hour before closing time"}')
ON CONFLICT (key) DO NOTHING;
