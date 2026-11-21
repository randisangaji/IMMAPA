import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart, Users, Calendar } from 'lucide-react';
import { OrgProfile } from '@/types';

interface HeroSectionProps {
  profile: OrgProfile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent-blue/30 via-white to-white py-16 sm:py-24 lg:py-28">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-accent-blue/60 blur-3xl opacity-70" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-cenderawasih-pink/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-cenderawasih-gold/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-1.5 shadow-xs mb-6">
              <Sparkles size={14} className="text-cenderawasih-gold" />
              <span className="text-xs font-semibold text-navy tracking-wide">
                {profile.tagline}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cenderawasih-pink" />
              <span className="text-[11px] font-medium text-gray-500">
                Sejak {profile.foundedYear}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.15] mb-6">
              More Than an Organization,{' '}
              <span className="text-gradient-cenderawasih">
                We Are Family.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Temukan kehangatan persaudaraan, keluhuran seni budaya, dan ruang bertumbuh bersama keluarga besar mahasiswa Maluku, Papua, dan NTT di Telkom University.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link href="/about" className="btn-primary">
                <span>Jelajahi Profil IMMAPA</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact-join" className="btn-outline">
                <span>Bergabung Bersama Kami</span>
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-navy">2017</p>
                <p className="text-xs text-gray-500 font-medium">Tahun Berdiri</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cenderawasih-pink">3 Wilayah</p>
                <p className="text-xs text-gray-500 font-medium">Maluku, Papua & NTT</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cenderawasih-gold">8+ Tahun</p>
                <p className="text-xs text-gray-500 font-medium">Kiprah & Arsip Kabinet</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Official Logo & Cultural Identity */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-navy/5 text-center">
                {/* Logo Frame */}
                <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-blue via-white to-cenderawasih-gold/20 p-2 shadow-inner">
                    <div className="relative h-full w-full rounded-full bg-white p-4 shadow-sm flex items-center justify-center">
                      <Image
                        src={profile.logoUrl}
                        alt="Official Logo IMMAPA Telkom University"
                        fill
                        className="object-contain p-2"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-navy mb-1">
                  IMMAPA Telkom University
                </h2>
                <p className="text-xs font-semibold text-cenderawasih-pink uppercase tracking-wider mb-3">
                  Rumah Mahasiswa Indonesia Timur
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Menjaga asa dan kebersamaan di tanah rantau Bandung melalui seni tari, olahraga, persaudaraan, dan kepedulian sosial.
                </p>

                {/* Badges */}
                <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-blue/80 px-3 py-1 text-xs font-medium text-navy">
                    <Users size={12} />
                    Mahasiswa Aktif
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-cenderawasih-gold/20 px-3 py-1 text-xs font-medium text-[#8C7515]">
                    <Calendar size={12} />
                    Arsip 2017–2025
                  </span>
                </div>
              </div>

              {/* Floating decorative card */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 rounded-2xl bg-navy p-3.5 text-white shadow-lg shadow-navy/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cenderawasih-pink text-white">
                  <Heart size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold">Kitorang Basodara</p>
                  <p className="text-[11px] text-gray-300">Satu Hati, Satu Semangat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
