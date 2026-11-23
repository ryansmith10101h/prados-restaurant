import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Photo Gallery | Prados Restaurant & Bar Magodo Lagos",
  description:
    "View photographs of Prados Restaurant & Bar: refined interior dining spaces, craft cocktails, gourmet Nigerian dishes, and vibrant night atmosphere in Magodo Phase 2.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
