import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Atmosphere & Dining Photo Gallery | Prados Restaurant & Bar",
  description:
    "Explore the visual journey of Prados Restaurant & Bar: contemporary dining rooms, ambient lighting, signature cocktails, and vibrant events in Magodo Phase 2, Lagos.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
