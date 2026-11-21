import Link from 'next/link';
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { OrgProfile } from '@/types';

interface AboutPreviewProps {
  profile: OrgProfile;
}

export default function AboutPreview({ profile }: AboutPreviewProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Video Embed or Cultural Collage */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-navy-900 aspect-video">
              {profile.profileVideoUrl ? (
                <iframe
                  src={profile.profileVideoUrl}
                  title="Video Profil IMMAPA Telkom University"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-8 text-center text-white">
                  <div>
                    <BookOpen size={48} className="mx-auto text-cenderawasih-gold mb-3" />
                    <p className="font-bold text-lg">Video Dokumentasi Profil</p>
                    <p className="text-xs text-gray-400">IMMAPA Telkom University</p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              Dokumentasi resmi pagelaran seni dan profil IMMAPA di YouTube
            </p>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-accent-blue/60 px-3 py-1 text-xs font-semibold text-navy">
              <span>TENTANG ORGANISASI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Mengenal Lebih Dekat{' '}
              <span className="text-gradient-cenderawasih">IMMAPA</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-base">
              {profile.aboutIntro}
            </p>

            <div className="space-y-3 pt-2">
              {profile.missions.slice(0, 3).map((mission, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cenderawasih-pink shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">{mission}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
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
