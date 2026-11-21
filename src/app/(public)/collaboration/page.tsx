import type { Metadata } from 'next';
import { dataService } from '@/services/storage';
import CollaborationForm from '@/components/collaboration/CollaborationForm';
import {
  Handshake,
  Sparkles,
  Megaphone,
  Gift,
  Users,
  Compass,
  FileText,
  Mail,
  Instagram,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kemitraan & Kolaborasi',
  description:
    'Peluang kerjasama event partnership, media partner, dan sponsorship bersama IMMAPA Telkom University.',
};

const BENEFITS = [
  {
    title: 'Akses Komunitas Mahasiswa',
    desc: 'Menjangkau ratusan mahasiswa aktif asal Maluku, Papua, dan NTT serta ribuan civitas akademika Telkom University.',
    icon: Users,
  },
  {
    title: 'Brand Exposure & Publikasi',
    desc: 'Promosi logo dan produk mitra pada poster, banner acara, serta media sosial resmi @immapa_tu.',
    icon: Megaphone,
  },
  {
    title: 'Kolaborasi Kebudayaan Autentik',
    desc: 'Kesempatan menghadirkan pentas tari adat, musik etnik, dan penampilan budaya timur yang memukau dalam agenda bersama.',
    icon: Compass,
  },
  {
    title: 'Hubungan Kemitraan Berkelanjutan',
    desc: 'Membangun sinergi jangka panjang untuk program kerja tahunan dan pengabdian sosial.',
    icon: Handshake,
  },
];

export default async function CollaborationPage() {
  const contact = await dataService.getContact();

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-blue/60 px-4 py-1.5 text-xs font-semibold text-navy mb-4">
            <Sparkles size={14} className="text-cenderawasih-pink" />
            <span>KEMITRAAN RESMI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Kolaborasi Bersama <span className="text-gradient-cenderawasih">IMMAPA</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Membuka pintu sinergi positif melalui event partnership, media partner, sponsorship kegiatan budaya, dan program pengabdian masyarakat.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xs hover:border-cenderawasih-pink/30 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue text-navy">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy">{b.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Guidebook & Direct Contact Banner */}
        <div className="rounded-3xl bg-navy p-8 sm:p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold text-cenderawasih-gold uppercase tracking-wider">
                GUIDEBOOK KEMITRAAN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Buku Panduan & Proposal Kerjasama
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Pelajari skema paket sponsorship, ketentuan media partner, dan syarat kolaborasi resmi kami.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-cenderawasih-pink" />
                  {contact.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Instagram size={14} className="text-cenderawasih-pink" />
                  @immapa_tu
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="rounded-2xl bg-white/10 p-5 text-center border border-white/10 w-full sm:w-auto">
                <FileText size={32} className="mx-auto text-cenderawasih-gold mb-2" />
                <p className="text-xs font-bold text-white mb-2">Buku Panduan IMMAPA</p>
                <span className="inline-block rounded-lg bg-white/20 px-3 py-1.5 text-[11px] font-semibold text-gray-200">
                  Unduh Guidebook (Tersedia via Admin)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <CollaborationForm />
        </div>
      </div>
    </div>
  );
}
