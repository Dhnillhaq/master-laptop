"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import CTAWhatsapp from "@/components/CTAWhatsapp";
import { site } from "@/lib/site";
import { waLink } from "@/lib/wa";

const services = [
  { title: "Install Ulang", desc: "Windows + driver + aplikasi dasar, rapi & siap pakai.", icon: "💻", bgColor: "from-orange-50 to-white", borderColor: "border-orange-200", textColor: "text-orange-600" },
  { title: "Upgrade SSD/RAM", desc: "Rekomendasi kompatibel + pemasangan + cloning (opsional).", icon: "⚡", bgColor: "from-amber-50 to-white", borderColor: "border-amber-200", textColor: "text-amber-700" },
  { title: "Perbaikan Hardware", desc: "Keyboard, LCD, fan, port charger, engsel, dll.", icon: "🔧", bgColor: "from-orange-50 to-white", borderColor: "border-orange-200", textColor: "text-orange-600" },
  { title: "Cleaning & Repaste", desc: "Bersih debu + ganti thermal paste, suhu lebih stabil.", icon: "✨", bgColor: "from-yellow-50 to-white", borderColor: "border-yellow-200", textColor: "text-yellow-700" },
  { title: "Blue Screen / Lemot", desc: "Diagnosa penyebab + optimasi + perbaikan.", icon: "🩺", bgColor: "from-red-50 to-white", borderColor: "border-red-200", textColor: "text-red-600" },
  { title: "Data Recovery", desc: "Bantu cek kemungkinan pemulihan data (case by case).", icon: "💾", bgColor: "from-amber-50 to-white", borderColor: "border-amber-200", textColor: "text-amber-700" },
];

// const pricing = [
//   { service: "Install Ulang Windows", price: "75K - 100K", desc: "Windows 10/11 + driver + aktivasi", icon: "💻" },
//   { service: "Cleaning + Repaste", price: "75K - 125K", desc: "Bersih debu + ganti thermal paste", icon: "✨" },
//   { service: "Upgrade SSD", price: "50K*", desc: "Pasang + cloning data (*harga part terpisah)", icon: "⚡" },
//   { service: "Upgrade RAM", price: "30K*", desc: "Pasang + test (*harga part terpisah)", icon: "🚀" },
//   { service: "Ganti Keyboard", price: "150K - 300K*", desc: "Termasuk part original (*tergantung tipe)", icon: "⌨️" },
//   { service: "Ganti Engsel Laptop", price: "100K - 200K", desc: "Perbaikan/ganti engsel patah/kendor", icon: "🔧" },
//   { service: "Service LCD/Layar", price: "200K - 800K*", desc: "Ganti LCD pecah/bergaris (*tergantung tipe)", icon: "🖥️" },
//   { service: "Diagnosa & Troubleshoot", price: "50K - 100K", desc: "Cek masalah + laporan detail", icon: "🔍" },
//   { service: "Data Recovery", price: "Mulai 200K", desc: "Pemulihan data (case by case)", icon: "💾" },
// ];

const faqs = [
  { q: "Berapa lama proses servis?", a: "Tergantung kasus. Ringan bisa same day, kasus berat 1–3 hari." },
  { q: "Ada garansi?", a: "Ada. Durasi garansi disesuaikan jenis layanan/part." },
  { q: "Bisa panggilan?", a: "Bisa untuk area tertentu (opsional)." },
];

export default function Home() {
  const [nama, setNama] = useState("");
  const [perangkat, setPerangkat] = useState("Laptop");
  const [keluhan, setKeluhan] = useState("");

  const msg = useMemo(() => {
    return `Halo ${site.name}.\n\nNama: ${nama || "-"}\nPerangkat: ${perangkat}\nKeluhan: ${keluhan || "-"}\n\nBisa dibantu estimasi & jadwal servis?`;
  }, [nama, perangkat, keluhan]);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white to-amber-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZlZTBlMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="relative z-10">
            <div className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700 mb-4">
              ⚡ Servis Profesional & Terpercaya
            </div>
            <h1 className="text-4xl font-bold md:text-6xl bg-gray-900 pb-2 bg-clip-text text-transparent">
              {site.tagline}
            </h1>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
              Servis laptop/PC: install ulang, upgrade SSD/RAM, cleaning, perbaikan hardware, dan troubleshooting.
              Estimasi jelas sebelum dikerjakan. 🔧
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAWhatsapp message="Halo, mau tanya layanan servis." />
              {/* <a
                href="#kontak"
                className="inline-flex items-center justify-center rounded-xl border-2 border-orange-600 px-6 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition-all"
              >
                📅 Booking cepat
              </a> */}
              {/* <a
                href="#harga"
                className="inline-flex items-center justify-center rounded-xl border-2 border-amber-700 px-6 py-3 font-semibold text-amber-700 hover:bg-amber-50 transition-all"
              >
                💰 Lihat harga
              </a> */}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl bg-white border border-orange-100 p-5 shadow-sm card-hover">
                <div className="text-3xl mb-2">✓</div>
                <div className="font-bold text-orange-600">Transparan</div>
                <div className="text-zinc-600 mt-1">Estimasi dulu</div>
              </div>
              <div className="rounded-2xl bg-white border border-green-100 p-5 shadow-sm card-hover">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-bold text-green-600">Cepat</div>
                <div className="text-zinc-600 mt-1">Same day*</div>
              </div>
              <div className="rounded-2xl bg-white border border-amber-100 p-5 shadow-sm card-hover">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="font-bold text-amber-700">Garansi</div>
                <div className="text-zinc-600 mt-1">7–30 hari*</div>
              </div>
            </div>
          </div>

          {/* Hero Image with Laptop Illustration */}
          <div className="relative z-10">
            <div className="rounded-3xl bg-gradient-to-br from-rose-700 to-red-800 p-0 shadow-2xl animate-float">
              <img
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"
                alt="Laptop Repair Service"
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-orange-100">
              <div className="flex items-center gap-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="font-bold text-lg">339+</div>
                  <div className="text-xs text-zinc-600">Review Google</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <div className="font-bold text-lg">4.8★</div>
                  <div className="text-xs text-zinc-600">Rating Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-600 py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-4xl font-bold">339+</div>
              <div className="mt-2 text-orange-100">Review Google</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.8★</div>
              <div className="mt-2 text-orange-100">Rating Google Maps</div>
            </div>
            <div>
              <div className="text-4xl font-bold">&lt;24H</div>
              <div className="mt-2 text-orange-100">Fast Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="mt-2 text-orange-100">Servis Profesional</div>
            </div>
          </div>
        </div>
      </section>



      {/* LAYANAN */}
      <Section
        id="layanan"
        title="🛠️ Layanan Kami"
        subtitle="Solusi lengkap untuk semua masalah laptop & PC Anda"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className={`rounded-3xl bg-gradient-to-br ${s.bgColor} border-2 ${s.borderColor} p-6 card-hover shadow-lg`}>
              <div className="text-5xl mb-4">{s.icon}</div>
              <div className="font-bold text-xl text-zinc-900">{s.title}</div>
              <div className="mt-3 text-sm text-zinc-600 leading-relaxed">{s.desc}</div>
              <a
                href={waLink(site.phone, `Halo, saya tertarik dengan layanan ${s.title}`)}
                target="_blank"
                className={`mt-4 inline-block ${s.textColor} font-semibold text-sm hover:underline`}
              >
                Tanya detail →
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* HARGA */}
      {/* <Section
        id="harga"
        title="💰 Daftar Harga Layanan"
        subtitle="Harga transparan untuk berbagai jenis servis laptop & PC"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-blue-100 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Layanan</th>
                    <th className="px-6 py-4 text-left font-semibold">Keterangan</th>
                    <th className="px-6 py-4 text-right font-semibold">Harga</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pricing.map((item, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="font-semibold text-zinc-900">{item.service}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-600">{item.desc}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-medium text-black-600 text-md">{item.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-orange-50 rounded-2xl border-2 border-orange-200">
            <div className="text-center">
              <div className="text-lg font-bold text-zinc-900 mb-2">💡 Catatan Penting</div>
              <div className="text-sm text-zinc-700 leading-relaxed">
                Harga dapat bervariasi tergantung kondisi & tipe laptop. Harga dengan tanda (*) belum termasuk part/komponen. 
                <a href={waLink(site.phone, "Halo, mau tanya estimasi harga servis")} target="_blank" className="font-semibold text-blue-600 hover:underline"> Hubungi kami untuk estimasi yang lebih akurat!</a>
              </div>
            </div>
          </div>
        </div>
      </Section> */}

      {/* PORTOFOLIO */}
      <Section
        id="portofolio"
        title="📸 Portofolio Kami"
        subtitle="Dokumentasi hasil kerja kami pada berbagai kasus servis laptop & PC"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: "./images/porto/upgrade-ssd.png", title: "Upgrade SSD 512GB", desc: "Laptop makin kencang + ruang penyimpanan luas" },
            { img: "./images/porto/cleaning.png", title: "Deep Cleaning", desc: "Bersih total dari debu, laptop jadi lebih dingin" },
            { img: "./images/porto/install-ulang.png", title: "Install Windows 11", desc: "Fresh install + driver + aplikasi lengkap" },
            { img: "./images/porto/repaste.png", title: "Repaste Thermal", desc: "Suhu: 85°C → 55°C" },
            { img: "./images/porto/kerja.png", title: "Repair LCD", desc: "Dari layar rusak jadi sempurna kembali" },
            { img: "./images/porto/engsel.png", title: "Perbaikan Engsel Infinix", desc: "Engsel patah diperbaiki dengan garansi" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl shadow-lg card-hover"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="font-bold text-lg">{item.title}</div>
                <div className="text-sm text-orange-200 mt-1">{item.desc}</div>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ✓
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONI */}
      <Section id="testimoni" title="⭐ Review dari Google Maps" subtitle="Review asli dari customer kami di Google Maps - Rating 4.8/5 dari 339+ ulasan">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Screenshot Review 1 */}
          <div className="rounded-3xl bg-white border-2 border-yellow-200 overflow-hidden shadow-lg card-hover">
            <img
              src="./images/reviews/review-1.png"
              alt="Review Google Maps 1"
              className="w-full h-auto"
            />
          </div>

          {/* Screenshot Review 2 */}
          <div className="rounded-3xl bg-white border-2 border-yellow-200 overflow-hidden shadow-lg card-hover">
            <img
              src="./images/reviews/review-2.png"
              alt="Review Google Maps 2"
              className="w-full h-auto"
            />
          </div>

          {/* Screenshot Review 3 */}
          <div className="rounded-3xl bg-white border-2 border-yellow-200 overflow-hidden shadow-lg card-hover">
            <img
              src="./images/reviews/review-3.png"
              alt="Review Google Maps 3"
              className="w-full h-auto"
            />
          </div>

          {/* Screenshot Review 4 */}
          <div className="rounded-3xl bg-white border-2 border-yellow-200 overflow-hidden shadow-lg card-hover">
            <img
              src="./images/reviews/review-4.png"
              alt="Review Google Maps 4"
              className="w-full h-auto"
            />
          </div>

          {/* Screenshot Review 5 */}
          <div className="rounded-3xl bg-white border-2 border-yellow-200 overflow-hidden shadow-lg card-hover">
            <img
              src="./images/reviews/review-5.png"
              alt="Review Google Maps 5"
              className="w-full h-auto"
            />
          </div>

          {/* Screenshot Review 6 */}
          <div className="rounded-3xl bg-white border-2 border-yellow-200 overflow-hidden shadow-lg card-hover">
            <img
              src="./images/reviews/review-6.png"
              alt="Review Google Maps 6"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-10 text-center space-y-4">
          <a
            href="https://www.google.com/maps/place/Master+Laptop+Malang+-+Service+Laptop+Malang+Kota/@-7.9467806,112.6129439,17z/data=!4m8!3m7!1s0x2e788273e50ff13d:0xfef082b972476339!8m2!3d-7.9467806!4d112.6129439!9m1!1b1!16s%2Fg%2F11q97jd3md"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg"
          >
            📍 Lihat Semua Review di Google Maps (339+ ulasan)
          </a>
          <div className="flex items-center justify-center gap-2 text-zinc-600">
            <span className="text-3xl">⭐</span>
            <span className="font-bold text-2xl text-zinc-900">4.8</span>
            <span className="text-zinc-600">/ 5.0 di Google Maps</span>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="❓ FAQ" subtitle="Pertanyaan yang sering ditanyakan">
        <div className="grid gap-4 max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <details key={f.q} className="rounded-2xl bg-white border-2 border-orange-100 p-6 card-hover shadow-md">
              <summary className="cursor-pointer font-bold text-lg text-zinc-900 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  {i + 1}
                </span>
                {f.q}
              </summary>
              <div className="mt-4 ml-11 text-zinc-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* LOKASI */}
      <Section id="lokasi" title="📍 Lokasi & Jam Buka" subtitle="Kunjungi workshop kami atau hubungi untuk servis on-site">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div className="rounded-3xl bg-white border-2 border-orange-200 p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white text-2xl">
                📍
              </div>
              <div>
                <div className="font-bold text-xl text-zinc-900">Alamat Workshop</div>
                <div className="mt-2 text-md text-zinc-600 font-semibold">{site.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                🕒
              </div>
              <div>
                <div className="font-bold text-xl text-zinc-900">Jam Operasional</div>
                <div className="mt-2 text-zinc-600 font-semibold">{site.hoursWeekdays}</div>
                <div className="mt-1 text-zinc-600 font-semibold">{site.hoursSunday}</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-orange-200 shadow-lg">
            <iframe
              src={site.mapsEmbedUrl}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </Section>

      {/* KONTAK */}
      <Section
        id="kontak"
        title="📞 Hubungi Kami"
        subtitle="Pilih channel komunikasi yang paling nyaman untuk Anda"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Kontak Info */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="rounded-3xl bg-gradient-to-br from-green-50 to-white border-2 border-green-200 p-6 shadow-lg card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-600">WhatsApp (Recommended)</div>
                  <div className="text-lg font-bold text-zinc-900">+{site.phone}</div>
                </div>
              </div>
              <CTAWhatsapp message="Halo, mau booking servis laptop." />
            </div>

            {/* Instagram */}
            <div className="rounded-3xl bg-gradient-to-br from-pink-50 to-white border-2 border-pink-200 p-6 shadow-lg card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-600">Instagram</div>
                  <div className="text-lg font-bold text-zinc-900">@masterlaptopmlg</div>
                </div>
              </div>
              <a
                href="https://instagram.com/toko_master_laptop_malang"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                📷 Follow Instagram
              </a>
            </div>

            {/* Facebook */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 p-6 shadow-lg card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-600">Facebook</div>
                  <div className="text-lg font-bold text-zinc-900">Master Laptop Malang</div>
                </div>
              </div>
              <a
                href="https://www.facebook.com/masterservicelaptop"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-all"
              >
                👍 Kunjungi Facebook
              </a>
            </div>
            {/* Email */}
            {/* <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 p-6 shadow-lg card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-zinc-600">Email</div>
                  <div className="text-lg font-bold text-zinc-900">info@masterlaptop.com</div>
                </div>
              </div>
              <a
                href="mailto:info@masterlaptop.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-orange-500 px-6 py-3 font-semibold text-orange-600 hover:bg-orange-50 transition-all"
              >
                ✉️ Kirim Email
              </a>
            </div>*/}
          </div>

          {/* Form Booking */}
          <div className="rounded-3xl bg-white border-2 border-blue-200 p-8 shadow-xl">
            <div className="font-bold text-2xl text-zinc-900 mb-2">📝 Form Booking Cepat</div>
            <div className="text-sm text-zinc-600 mb-6">Isi form di bawah, langsung terhubung ke WhatsApp</div>
            <div className="grid gap-4">
              <input
                className="rounded-xl border-2 border-blue-200 px-5 py-3 focus:border-blue-500 focus:outline-none transition-all"
                placeholder="Nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <select
                className="rounded-xl border-2 border-blue-200 px-5 py-3 focus:border-blue-500 focus:outline-none transition-all"
                value={perangkat}
                onChange={(e) => setPerangkat(e.target.value)}
              >
                <option>Laptop</option>
                <option>PC</option>
                <option>Printer</option>
              </select>
              <textarea
                className="min-h-[160px] rounded-xl border-2 border-blue-200 px-5 py-3 focus:border-blue-500 focus:outline-none transition-all"
                placeholder="Keluhan singkat (contoh: laptop lemot, blue screen, mati total, dll)"
                value={keluhan}
                onChange={(e) => setKeluhan(e.target.value)}
              />
              <a
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-center font-semibold text-white hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
                href={waLink(site.phone, msg)}
                target="_blank"
              >
                🚀 Kirim ke WhatsApp
              </a>

            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
              <div className="text-sm text-blue-900">
                <span className="font-bold">💡 Tips:</span> Sertakan foto kondisi laptop untuk estimasi lebih akurat!
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action Final */}
      <section className="py-15 bg-gradient-to-r from-amber-700 to-amber-600">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Laptop Bermasalah? Hubungi Kami Sekarang!</h2>
          <p className="text-xl text-orange-100 mb-8">Konsultasi gratis, estimasi jelas, servis profesional</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waLink(site.phone, "Halo, laptop saya bermasalah. Mau konsultasi.")}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-amber-700 hover:bg-orange-50 transition-all shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat WhatsApp Sekarang
            </a>

          </div>
        </div>
      </section>

      <div className="pb-10" />
    </main>
  );
}
