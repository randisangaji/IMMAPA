import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dataService } from '@/services/storage';
import { formatDate } from '@/lib/utils';
import {
  Calendar,
  MapPin,
  Users,
  Target,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface ProgramDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProgramDetailProps): Promise<Metadata> {
  const { id } = await params;
  const program = await dataService.getProgramBySlug(id);
  if (!program) return { title: 'Program Tidak Ditemukan' };

  return {
    title: `${program.title} | IMMAPA Telkom University`,
    description: program.description,
  };
}

export default async function ProgramDetailPage({ params }: ProgramDetailProps) {
  const { id } = await params;
  const program = await dataService.getProgramBySlug(id);

  if (!program) {
    notFound();
  }

  const allPrograms = await dataService.getPrograms();
  const relatedPrograms = allPrograms
    .filter((p) => p.id !== program.id && p.category === program.category)
    .slice(0, 2);

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-navy transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Daftar Program</span>
        </Link>

        {/* Hero Header */}
        <div className="rounded-3xl bg-navy p-8 sm:p-12 text-white space-y-6 shadow-xl shadow-navy/10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white">
              {program.category}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                program.status === 'COMPLETED'
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : program.status === 'ONGOING'
                  ? 'bg-amber-500/20 text-amber-300'
                  : 'bg-blue-500/20 text-blue-200'
              }`}
            >
              {program.status === 'COMPLETED'
                ? 'Terlaksana'
                : program.status === 'ONGOING'
                ? 'Sedang Berjalan'
                : 'Mendatang'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {program.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 pt-2 border-t border-navy-700/60">
            {program.activityDate && (
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-cenderawasih-pink" />
                <span>{formatDate(program.activityDate)}</span>
              </div>
            )}
            {program.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cenderawasih-gold" />
                <span>{program.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Users size={16} className="text-white" />
              <span>{program.responsibleDivision}</span>
            </div>
          </div>
        </div>

        {/* Main Content & Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">Tentang Kegiatan</h2>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {program.description}
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-accent-gray/50 p-6 space-y-3">
              <div className="flex items-center gap-2 text-cenderawasih-pink font-bold text-sm uppercase tracking-wide">
                <Target size={16} />
                <span>Tujuan & Sasaran Kegiatan</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {program.objective}
              </p>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                Penanggung Jawab
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue text-navy">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{program.responsibleDivision}</p>
                  <p className="text-xs text-gray-500">IMMAPA Telkom University</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-accent-blue/30 p-6 text-center space-y-3">
              <p className="text-sm font-bold text-navy">Ingin Bermitra di Acara Ini?</p>
              <p className="text-xs text-gray-600">
                Kami terbuka untuk kolaborasi sponsor, media partner, dan komunitas.
              </p>
              <Link href="/collaboration" className="btn-primary w-full text-xs py-2.5">
                Ajukan Kolaborasi
              </Link>
            </div>
          </div>
        </div>

        {/* Related Programs */}
        {relatedPrograms.length > 0 && (
          <div className="pt-10 border-t border-gray-100 space-y-6">
            <h3 className="text-xl font-bold text-navy">Program Terkait</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPrograms.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/programs/${rel.slug}`}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs hover:border-cenderawasih-pink/30 hover:shadow-md transition-all flex justify-between items-center group"
                >
                  <div>
                    <span className="text-xs font-semibold text-cenderawasih-pink">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-navy mt-1 group-hover:text-cenderawasih-pink transition-colors">
                      {rel.title}
                    </h4>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-cenderawasih-pink group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
