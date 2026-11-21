import Link from 'next/link';
import { ArrowRight, Sparkles, HeartHandshake } from 'lucide-react';
import { RecruitmentInfo } from '@/types';

interface JoinCtaProps {
  recruitment: RecruitmentInfo;
}

export default function JoinCta({ recruitment }: JoinCtaProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white border-t border-navy-mid">
      {/* Background soft light */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-white/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white mb-6">
          <Sparkles size={14} />
          <span>STATUS: {recruitment.status === 'OPEN' ? 'PENDAFTARAN DIBUKA' : 'COMING SOON'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
          Siap Bergabung Bersama Keluarga Besar IMMAPA?
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Jadilah bagian dari mahasiswa Indonesia Timur yang solid, berbudaya, dan berdaya saing. Rumah kedua kamu di Bandung menanti.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact-join"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-navy shadow-md transition-all duration-300 hover:bg-soft-100 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Informasi Pendaftaran</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/collaboration"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <HeartHandshake size={16} />
            <span>Kemitraan & Kolaborasi</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
