import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

export const metadata: Metadata = {
  title: {
    default: "Prados Restaurant & Bar | Magodo Phase 2, Lagos",
    template: "%s | Prados Restaurant & Bar",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
