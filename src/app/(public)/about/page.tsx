import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { dataService } from '@/services/storage';
import {
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Profil lengkap organisasi, latar belakang pendirian, visi, misi, dan nilai-nilai IMMAPA Telkom University.',
};

export default async function AboutPage() {
  const profile = await dataService.getProfile();

  return (
    <div className="py-16 sm:py-20 bg-white text-navy">
      {/* Hero Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="badge-navy mb-4">
          <Sparkles size={14} />
          <span>PROFIL ORGANISASI RESMI</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
          Tentang <span className="text-gradient-navy">IMMAPA</span> Telkom University
        </h1>
        <p className="text-lg text-soft-600 max-w-2xl mx-auto leading-relaxed">
          Membangun persaudaraan yang kokoh dan melestarikan kekayaan seni budaya Maluku, Papua, dan NTT di tanah perantauan.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Profile Card & Logo */}
        <div className="rounded-2xl border border-soft-300 bg-white p-8 sm:p-12 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-2xl bg-soft-100 p-4 border border-soft-300 shadow-inner flex items-center justify-center">
                <Image
                  src={profile.logoUrl}
                  alt="Official Logo IMMAPA"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-navy-muted uppercase tracking-widest">
                IDENTITAS & LAMBANG RESMI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                {profile.fullName}
              </h2>
              <p className="text-soft-600 leading-relaxed text-base">
                {profile.aboutIntro}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-soft-600">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-soft-200 px-3.5 py-2 border border-soft-300">
                  <Calendar size={14} className="text-navy" />
                  Didirikan: Tahun {profile.foundedYear}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-soft-200 px-3.5 py-2 border border-soft-300">
                  <MapPin size={14} className="text-soft-700" />
                  Domisili: {profile.originLocation}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-soft-200 px-3.5 py-2 border border-soft-300">
                  <Award size={14} className="text-navy" />
                  Slogan: &ldquo;{profile.tagline}&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-navy-muted uppercase tracking-widest">
              SEJARAH & LATAR BELAKANG
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Mengapa IMMAPA Didirikan?
            </h2>
            <p className="text-soft-600 leading-relaxed text-base">
              {profile.backgroundStory}
            </p>
            <p className="text-soft-600 leading-relaxed text-base">
              Berada jauh dari kampung halaman menuntut para mahasiswa untuk saling menopang dan menguatkan. Melalui IMMAPA, setiap anggota menemukan keluarga yang siap mendengarkan, berbagi suka duka perkuliahan, serta menyalurkan talenta seni dan kepemimpinan di tingkat universitas.
            </p>
            <div className="pt-2">
              <Link
                href="/history-cabinets"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-navy-light transition-colors"
              >
                <span>Lihat Arsip Perjalanan Kabinet (2017–2025)</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-soft-100 border border-soft-300 p-8 text-navy space-y-4 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white shadow-navy-glow mb-2">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-xl font-bold text-navy">Keluarga Kedua di Rantau</h3>
            <p className="text-sm text-soft-600 leading-relaxed">
              &ldquo;Kitorang Bisa Kitorang Basodara&rdquo; bukan sekadar slogan, melainkan napas dari setiap perkumpulan, latihan tari adat, pertandingan futsal, dan aksi sosial kami di Telkom University.
            </p>
          </div>
        </div>

        {/* Visi dan Misi */}
        <div className="rounded-2xl bg-soft-100 border border-soft-300 p-8 sm:p-12 space-y-10">
          {/* Visi */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-navy-muted uppercase tracking-wider">
              VISI ORGANISASI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1 mb-4">
              Visi IMMAPA
            </h2>
            <div className="rounded-xl border-l-4 border-navy bg-white p-6 shadow-card text-base sm:text-lg text-navy font-medium leading-relaxed">
              &ldquo;{profile.vision}&rdquo;
            </div>
          </div>

          {/* Misi */}
          <div>
            <span className="text-xs font-bold text-navy uppercase tracking-wider">
              MISI ORGANISASI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1 mb-6">
              Misi & Langkah Strategis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.missions.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-soft-300 bg-white p-5 shadow-card flex items-start gap-4 hover:border-navy/15 transition-colors"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white mt-0.5 shadow-sm">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-soft-700 leading-relaxed">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-navy-muted uppercase tracking-wider">
              MANFAAT KEANGGOTAAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Mengapa Bergabung Bersama Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-xl border border-soft-300 bg-white p-6 shadow-card flex items-start gap-3.5 hover:border-navy/15 transition-colors"
              >
                <CheckCircle2 size={20} className="text-navy shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-soft-700 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/contact-join" className="btn-primary px-8">
              <span>Daftar Menjadi Anggota</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
