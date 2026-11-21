import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart, Users, Calendar } from 'lucide-react';
import { OrgProfile } from '@/types';

interface HeroSectionProps {
  profile: OrgProfile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[550px] w-[700px] rounded-full bg-navy/5 blur-[140px] opacity-80" />
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-soft-300/50 blur-[130px]" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-navy/3 blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#191F4008_1px,transparent_1px),linear-gradient(to_bottom,#191F4008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/5 px-4 py-1.5 shadow-sm mb-6">
              <Sparkles size={14} className="text-navy animate-pulse" />
              <span className="text-xs font-bold text-navy tracking-wide">
                {profile.tagline}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-navy" />
              <span className="text-[11px] font-semibold text-soft-600">
                Sejak {profile.foundedYear}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy leading-[1.12] mb-6">
              More Than an Organization,{' '}
              <span className="text-gradient-navy block sm:inline">
                We Are Family.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-soft-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Temukan kehangatan persaudaraan, keluhuran seni budaya, dan ruang bertumbuh bersama keluarga besar mahasiswa Maluku, Papua, dan NTT di Telkom University.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link href="/about" className="btn-primary">
                <span>Jelajahi Profil IMMAPA</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact-join" className="btn-secondary">
                <span>Bergabung Bersama Kami</span>
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="mt-12 pt-8 border-t border-soft-300 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-navy">2017</p>
                <p className="text-xs text-soft-500 font-medium mt-1">Tahun Berdiri</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-navy-light">3 Wilayah</p>
                <p className="text-xs text-soft-500 font-medium mt-1">Maluku, Papua & NTT</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-navy">8+ Tahun</p>
                <p className="text-xs text-soft-500 font-medium mt-1">Arsip Kabinet</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Official Logo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Soft glow backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-navy/10 to-soft-300/60 blur-xl opacity-75" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-soft-300 bg-white p-8 shadow-elevated text-center">
                {/* Logo Frame */}
                <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-navy/10 via-soft-200 to-soft-300 p-2 shadow-inner">
                    <div className="relative h-full w-full rounded-full bg-white p-4 border border-soft-300 flex items-center justify-center">
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

                <h2 className="text-xl font-extrabold text-navy mb-1 tracking-tight">
                  IMMAPA Telkom University
                </h2>
                <p className="text-xs font-bold text-navy-muted uppercase tracking-wider mb-3">
                  Rumah Mahasiswa Indonesia Timur
                </p>
                <p className="text-xs text-soft-600 leading-relaxed max-w-xs mx-auto">
                  Menjaga asa dan kebersamaan di tanah rantau Bandung melalui seni tari, olahraga, persaudaraan, dan kepedulian sosial.
                </p>

                {/* Badges */}
                <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
                  <span className="badge-soft">
                    <Users size={12} className="text-navy" />
                    Mahasiswa Aktif
                  </span>
                  <span className="badge-navy">
                    <Calendar size={12} />
                    Arsip 2017–2025
                  </span>
                </div>
              </div>

              {/* Floating interactive badge */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 rounded-2xl bg-white border border-soft-300 p-3.5 text-navy shadow-elevated">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white shadow-navy-glow">
                  <Heart size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">Kitorang Basodara</p>
                  <p className="text-[11px] text-soft-500">Satu Hati, Satu Semangat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
