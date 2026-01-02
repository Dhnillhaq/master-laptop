import Link from "next/link";
import { site } from "@/lib/site";

const items = [
  { label: "Layanan", href: "#layanan" },
  // { label: "Harga", href: "#harga" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-orange-100 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            <img src="./images/logo.png" alt="Logo" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            {site.name}
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-zinc-700 hover:text-orange-600 transition-colors">
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontak"
          className="rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:from-amber-800 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
        >
          📱 Booking
        </a>
      </div>
    </header>
  );
}
