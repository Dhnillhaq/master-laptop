import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 text-zinc-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
