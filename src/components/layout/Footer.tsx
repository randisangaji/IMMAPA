import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, MapPin, Youtube, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-12 relative overflow-hidden">
      {/* Subtle ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/15">
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 shrink-0 rounded-2xl bg-white/10 p-1.5 border border-white/20">
                <Image
                  src="/logos/logo-immapa.png"
                  alt="Official Logo IMMAPA"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white">
                  IMMAPA Telkom University
                </h3>
                <p className="text-xs text-white/70 font-bold tracking-wide">
                  Kitorang Bisa Kitorang Basodara
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Ikatan Mahasiswa Maluku, Papua & NTT (IMMAPA) adalah wadah persaudaraan, pelestarian seni budaya, dan ruang bertumbuh bagi mahasiswa Indonesia Timur di lingkungan Telkom University, Bandung.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/immapa_tu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white/80 transition-all hover:bg-white hover:text-navy hover:scale-105"
                aria-label="Instagram Resmi IMMAPA"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:immapa@telkomuniversity.ac.id"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white/80 transition-all hover:bg-white hover:text-navy hover:scale-105"
                aria-label="Email Resmi IMMAPA"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.youtube.com/@immapatelkomuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white/80 transition-all hover:bg-white hover:text-navy hover:scale-105"
                aria-label="YouTube IMMAPA"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4">
              Navigasi
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Tentang IMMAPA
                </Link>
              </li>
              <li>
                <Link href="/history-cabinets" className="hover:text-white transition-colors">
                  Kabinet & Sejarah
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Program Kerja
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Galeri Dokumentasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan & Kerjasama */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4">
              Layanan & Mitra
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/merchandise" className="hover:text-white transition-colors">
                  Katalog Merchandise
                </Link>
              </li>
              <li>
                <Link href="/collaboration" className="hover:text-white transition-colors">
                  Kolaborasi & Sponsor
                </Link>
              </li>
              <li>
                <Link href="/contact-join" className="hover:text-white transition-colors">
                  Open Recruitment
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80">
                  <span>Portal Administrator</span>
                  <ExternalLink size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4">
              Sekretariat
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-white/80 shrink-0 mt-0.5" />
                <span>
                  Telkom University, Jl. Telekomunikasi No. 1, Terusan Buahbatu, Bandung, Jawa Barat 40257
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-white/80 shrink-0" />
                <a
                  href="mailto:immapa@telkomuniversity.ac.id"
                  className="hover:text-white transition-colors"
                >
                  immapa@telkomuniversity.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} IMMAPA Telkom University. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Dibangun dengan <Heart size={14} className="text-red-400 fill-red-400" /> untuk keluarga besar mahasiswa Indonesia Timur.
          </p>
        </div>
      </div>
    </footer>
  );
}
