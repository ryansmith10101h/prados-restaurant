import type { Metadata } from "next";
import MenuClient from "@/components/menu/MenuClient";

export const metadata: Metadata = {
  title: "Food & Drinks Menu | Prados Restaurant & Bar Magodo Lagos",
  description:
    "Explore our culinary offerings and craft bar menu. Contemporary Nigerian delicacies, premium grills, signature cocktails, and fine spirits at Magodo Phase 2, Lagos.",
};

export default function MenuPage() {
  return <MenuClient />;
}
