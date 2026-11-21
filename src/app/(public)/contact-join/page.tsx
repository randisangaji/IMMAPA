import type { Metadata } from 'next';
import { dataService } from '@/services/storage';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  HelpCircle,
  Instagram,
  Mail,
  Youtube,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontak & Pendaftaran Anggota',
  description:
    'Informasi open recruitment, syarat pendaftaran keanggotaan IMMAPA, kontak resmi, dan tanya jawab (FAQ).',
};

const FAQS = [
  {
    q: 'Siapa saja yang bisa bergabung menjadi anggota IMMAPA?',
    a: 'Semua mahasiswa aktif Telkom University yang berasal dari wilayah Maluku, Papua, dan Nusa Tenggara Timur — serta mahasiswa yang memiliki ketertarikan tinggi dan kepedulian terhadap seni dan pelestarian budaya Indonesia Timur.',
  },
  {
    q: 'Apakah pendaftaran anggota dipungut biaya?',
    a: 'Pendaftaran keanggotaan IMMAPA tidak dipungut biaya sama sekali (gratis). Iuran partisipasi mungkin berlaku pada kegiatan tertentu dan selalu dikelola secara transparan.',
  },
  {
    q: 'Kapan periode Open Recruitment diadakan?',
    a: 'Open recruitment biasanya dibuka pada awal semester ganjil bertepatan dengan masa penyambutan mahasiswa baru, serta open recruitment kepengurusan kabinet tahunan.',
  },
  {
    q: 'Apa saja kegiatan rutin yang bisa saya ikuti setelah bergabung?',
    a: 'Anda dapat bergabung dalam latihan rutin tari tradisional & musik etnik, pertandingan olahraga mingguan (IMMAPA Fun Sport), forum mentoring akademik, kegiatan bakti sosial, serta kepanitiaan acara Cendrawaku.',
  },
  {
    q: 'Bagaimana cara mendaftar jika saya bukan berasal dari Indonesia Timur?',
    a: 'IMMAPA sangat terbuka bagi siapa pun yang mencintai budaya Maluku, Papua, dan NTT. Anda dapat mendaftar saat open recruitment dibuka atau langsung menghubungi narahubung kami di Instagram @immapa_tu.',
  },
];

export default async function ContactJoinPage() {
  const recruitment = await dataService.getRecruitment();
  const contact = await dataService.getContact();

  return (
    <div className="py-16 sm:py-20 bg-soft-100 text-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge-navy mb-4">
            <Sparkles size={14} />
            <span>PENDAFTARAN & KONTAK RESMI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
            Bergabung Bersama <span className="text-gradient-navy">Keluarga IMMAPA</span>
          </h1>
          <p className="text-base sm:text-lg text-soft-600 leading-relaxed">
            Temukan rumah kedua kamu di Telkom University. Mari merajut persaudaraan dan melestarikan budaya Indonesia Timur bersama.
          </p>
        </div>

        {/* Recruitment Status Card */}
        <div className="rounded-2xl border border-soft-300 bg-white p-8 sm:p-12 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase ${
                    recruitment.status === 'OPEN'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : recruitment.status === 'COMING_SOON'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-soft-200 text-soft-500 border border-soft-300'
                  }`}
                >
                  {recruitment.status === 'OPEN'
                    ? 'Pendaftaran Dibuka'
                    : recruitment.status === 'COMING_SOON'
                    ? 'Segera Dibuka'
                    : 'Pendaftaran Ditutup'}
                </span>
                {recruitment.period && (
                  <span className="text-xs font-medium text-soft-500">
                    Periode {recruitment.period}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Open Recruitment IMMAPA Telkom University
              </h2>

              <p className="text-soft-600 leading-relaxed text-sm sm:text-base">
                {recruitment.announcement}
              </p>

              {/* Requirements */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-navy-muted">
                  Syarat & Ketentuan Pendaftaran:
                </p>
                {recruitment.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-soft-600">
                    <CheckCircle2 size={16} className="text-navy shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                {recruitment.status === 'OPEN' && recruitment.registrationUrl ? (
                  <a
                    href={recruitment.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-8 py-3 text-sm"
                  >
                    <span>Isi Formulir Pendaftaran</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-xl bg-soft-200 border border-soft-300 px-5 py-3 text-xs font-semibold text-soft-600">
                    <Calendar size={14} className="text-navy" />
                    <span>Informasi link formulir akan aktif saat pendaftaran resmi dibuka.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-4 rounded-2xl bg-soft-100 p-6 border border-soft-300 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy">
                Tahapan Seleksi & Welcoming
              </h3>
              <div className="space-y-3">
                {recruitment.timeline.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white mt-0.5 shadow-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-navy">{t.stage}</p>
                      <p className="text-[11px] text-soft-500">{t.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-soft-300 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-navy/20 transition-all space-y-3 group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/10 border border-navy/15 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
              <Instagram size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy">Instagram Resmi</h3>
            <p className="text-xs text-soft-500">
              Update harian, dokumentasi foto kegiatan, dan informasi pendaftaran.
            </p>
            <p className="text-xs font-bold text-navy group-hover:translate-x-0.5 transition-transform">@immapa_tu →</p>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="rounded-2xl border border-soft-300 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-navy/20 transition-all space-y-3 group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-200 border border-soft-300 text-soft-600 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy">Email Korespondensi</h3>
            <p className="text-xs text-soft-500">
              Surat menyurat resmi, proposal kerjasama, dan pertanyaan umum.
            </p>
            <p className="text-xs font-bold text-navy">{contact.email} →</p>
          </a>

          <a
            href={contact.youtube || 'https://www.youtube.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-soft-300 bg-white p-7 shadow-card hover:shadow-card-hover hover:border-red-200 transition-all space-y-3 group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 border border-red-200 text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
              <Youtube size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy">Kanal YouTube</h3>
            <p className="text-xs text-soft-500">
              Video profil, pertunjukan tarian adat, dan dokumentasi festival.
            </p>
            <p className="text-xs font-bold text-red-500">IMMAPA Telkom University →</p>
          </a>
        </div>

        {/* FAQ Section */}
        <div className="rounded-2xl bg-white border border-soft-300 p-8 sm:p-12 space-y-8 shadow-card">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-navy mb-2">
              TANYA JAWAB UMUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-soft-300 bg-soft-100 p-6 space-y-2 hover:border-navy/15 transition-colors">
                <h4 className="text-base font-bold text-navy flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-navy shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-soft-600 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
