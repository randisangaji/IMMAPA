import Link from 'next/link';
import { ArrowRight, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { OrgProfile } from '@/types';

interface AboutPreviewProps {
  profile: OrgProfile;
}

export default function AboutPreview({ profile }: AboutPreviewProps) {
  return (
    <section className="py-24 bg-soft-100 relative border-t border-soft-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Video Embed */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-soft-300 bg-white shadow-elevated aspect-video group">
              {profile.profileVideoUrl ? (
                <iframe
                  src={profile.profileVideoUrl}
                  title="Video Profil IMMAPA Telkom University"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-8 text-center text-navy">
                  <div>
                    <BookOpen size={48} className="mx-auto text-navy mb-3" />
                    <p className="font-bold text-lg text-navy">Video Dokumentasi Profil</p>
                    <p className="text-xs text-soft-500">IMMAPA Telkom University</p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-xs text-soft-500 text-center mt-3 flex items-center justify-center gap-1.5">
              <Sparkles size={13} className="text-navy" />
              <span>Dokumentasi resmi pagelaran seni dan profil IMMAPA di YouTube</span>
            </p>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="badge-navy">
              <span>TENTANG ORGANISASI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Mengenal Lebih Dekat{' '}
              <span className="text-gradient-navy">IMMAPA</span>
            </h2>

            <p className="text-soft-600 leading-relaxed text-base">
              {profile.aboutIntro}
            </p>

            {/* Mission Points */}
            <div className="space-y-3.5 pt-2">
              {profile.missions.slice(0, 3).map((mission, idx) => (
                <div key={idx} className="flex items-start gap-3.5 rounded-xl border border-soft-300 bg-white p-3.5 transition-colors hover:border-navy/15 hover:shadow-card">
                  <CheckCircle2 size={18} className="text-navy shrink-0 mt-0.5" />
                  <p className="text-sm text-soft-700 leading-relaxed">{mission}</p>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link href="/about" className="btn-primary">
                <span>Baca Profil & Visi Misi Lengkap</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
