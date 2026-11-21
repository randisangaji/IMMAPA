import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { dataService } from '@/services/storage';
import {
  Compass,
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
    <div className="py-12 sm:py-16">
      {/* Hero Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent-blue/60 px-4 py-1.5 text-xs font-semibold text-navy mb-4">
          <Sparkles size={14} className="text-cenderawasih-pink" />
          <span>PROFIL ORGANISASI RESMI</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4">
          Tentang <span className="text-gradient-cenderawasih">IMMAPA</span> Telkom University
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Membangun persaudaraan yang kokoh dan melestarikan kekayaan seni budaya Maluku, Papua, dan NTT di tanah perantauan.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Profile Card & Logo Significance */}
        <div className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-3xl bg-gradient-to-tr from-accent-blue/50 to-white p-4 border border-gray-100 shadow-sm flex items-center justify-center">
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
              <span className="text-xs font-bold text-cenderawasih-pink uppercase tracking-widest">
                IDENTITAS & LAMBANG
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                {profile.fullName}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {profile.aboutIntro}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-gray-600">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3 py-2 border border-gray-100">
                  <Calendar size={14} className="text-navy" />
                  Didirikan: Tahun {profile.foundedYear}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3 py-2 border border-gray-100">
                  <MapPin size={14} className="text-cenderawasih-pink" />
                  Domisili: {profile.originLocation}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3 py-2 border border-gray-100">
                  <Award size={14} className="text-cenderawasih-gold" />
                  Slogan: &ldquo;{profile.tagline}&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Latar Belakang Pendirian */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-navy uppercase tracking-widest">
              SEJARAH & LATAR BELAKANG
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Mengapa IMMAPA Didirikan?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {profile.backgroundStory}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Berada jauh dari kampung halaman menuntut para mahasiswa untuk saling menopang dan menguatkan. Melalui IMMAPA, setiap anggota menemukan keluarga yang siap mendengarkan, berbagi suka duka perkuliahan, serta menyalurkan talenta seni dan kepemimpinan di tingkat universitas.
            </p>
            <div className="pt-2">
              <Link
                href="/history-cabinets"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-cenderawasih-pink transition-colors"
              >
                <span>Lihat Arsip Perjalanan Kabinet (2017–2025)</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-navy p-8 text-white space-y-4 shadow-lg shadow-navy/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cenderawasih-pink text-white mb-2">
              <ShieldCheck size={26} />
            </div>
            <h3 className="text-xl font-bold">Keluarga Kedua di Rantau</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              &ldquo;Kitorang Bisa Kitorang Basodara&rdquo; bukan sekadar slogan, melainkan napas dari setiap perkumpulan, latihan tari adat, pertandingan futsal, dan aksi sosial kami di Telkom University.
            </p>
          </div>
        </div>

        {/* Visi dan Misi */}
        <div className="rounded-3xl bg-accent-gray/60 border border-gray-100 p-8 sm:p-12 space-y-10">
          {/* Visi */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-cenderawasih-pink uppercase tracking-wider">
              VISI ORGANISASI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1 mb-4">
              Visi IMMAPA
            </h2>
            <div className="rounded-2xl border-l-4 border-cenderawasih-pink bg-white p-6 shadow-xs text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
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
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs flex items-start gap-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manfaat Bergabung */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-cenderawasih-pink uppercase tracking-wider">
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
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs flex items-start gap-3 hover:border-cenderawasih-pink/30 transition-colors"
              >
                <CheckCircle2 size={20} className="text-cenderawasih-pink shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-gray-700 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/contact-join" className="btn-accent px-8">
              <span>Daftar Menjadi Anggota</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
