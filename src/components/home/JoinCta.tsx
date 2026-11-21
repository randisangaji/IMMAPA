import Link from 'next/link';
import { ArrowRight, Sparkles, HeartHandshake } from 'lucide-react';
import { RecruitmentInfo } from '@/types';

interface JoinCtaProps {
  recruitment: RecruitmentInfo;
}

export default function JoinCta({ recruitment }: JoinCtaProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      {/* Background patterns */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cenderawasih-pink blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cenderawasih-gold blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-cenderawasih-gold mb-6 backdrop-blur-md">
          <Sparkles size={14} />
          <span>STATUS: {recruitment.status === 'OPEN' ? 'PENDAFTARAN DIBUKA' : 'COMING SOON'}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
          Siap Bergabung Bersama Keluarga Besar IMMAPA?
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Jadilah bagian dari mahasiswa Indonesia Timur yang solid, berbudaya, dan berdaya saing. Rumah kedua kamu di Bandung menanti.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact-join"
            className="btn-accent px-8 py-3.5 text-sm"
          >
            <span>Informasi Pendaftaran</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/collaboration"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <HeartHandshake size={16} />
            <span>Kemitraan & Kolaborasi</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
