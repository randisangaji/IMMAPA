import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, MapPin, Youtube, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-700/60">
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 rounded-xl bg-white p-1">
                <Image
                  src="/logos/logo-immapa.png"
                  alt="Official Logo IMMAPA"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  IMMAPA Telkom University
                </h3>
                <p className="text-xs text-cenderawasih-gold font-medium">
                  Kitorang Bisa Kitorang Basodara
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Ikatan Mahasiswa Maluku, Papua & NTT (IMMAPA) adalah wadah persaudaraan, pelestarian seni budaya, dan pengembangan diri bagi mahasiswa Indonesia Timur di lingkungan Telkom University, Bandung.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/immapa_tu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-gray-300 transition-colors hover:bg-cenderawasih-pink hover:text-white"
                aria-label="Instagram Resmi IMMAPA"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:immapa@telkomuniversity.ac.id"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-gray-300 transition-colors hover:bg-cenderawasih-pink hover:text-white"
                aria-label="Email Resmi IMMAPA"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.youtube.com/@immapatelkomuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-gray-300 transition-colors hover:bg-cenderawasih-pink hover:text-white"
                aria-label="YouTube IMMAPA"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cenderawasih-gold mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cenderawasih-gold mb-4">
              Layanan & Mitra
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
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
                <Link href="/admin" className="hover:text-white transition-colors flex items-center gap-1.5 text-xs text-gray-400 hover:text-cenderawasih-gold">
                  <span>Portal Administrator</span>
                  <ExternalLink size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Location */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cenderawasih-gold mb-4">
              Sekretariat
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-cenderawasih-pink shrink-0 mt-0.5" />
                <span>
                  Telkom University, Jl. Telekomunikasi No. 1, Terusan Buahbatu, Bandung, Jawa Barat 40257
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-cenderawasih-gold shrink-0" />
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} IMMAPA Telkom University. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Dibangun dengan <Heart size={13} className="text-cenderawasih-pink fill-cenderawasih-pink" /> untuk keluarga besar mahasiswa Indonesia Timur.
          </p>
        </div>
      </div>
    </footer>
  );
}
