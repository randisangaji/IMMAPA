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
    <div className="py-16 sm:py-20 bg-soft-100 text-navy">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-soft-500 hover:text-navy transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Daftar Program</span>
        </Link>

        {/* Hero Header */}
        <div className="rounded-2xl bg-white border border-soft-300 p-8 sm:p-12 text-navy space-y-6 shadow-elevated relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-navy/5 blur-[100px]" />

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <span className="rounded-full bg-soft-200 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-navy border border-soft-300">
              {program.category}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                program.status === 'COMPLETED'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : program.status === 'ONGOING'
                  ? 'bg-amber-50 text-amber-700 border border-amber-200'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}
            >
              {program.status === 'COMPLETED'
                ? 'Terlaksana'
                : program.status === 'ONGOING'
                ? 'Sedang Berjalan'
                : 'Mendatang'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight relative z-10">
            {program.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-soft-600 pt-3 border-t border-soft-300 relative z-10">
            {program.activityDate && (
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-navy" />
                <span>{formatDate(program.activityDate)}</span>
              </div>
            )}
            {program.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-soft-600" />
                <span>{program.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Users size={16} className="text-navy" />
              <span>{program.responsibleDivision}</span>
            </div>
          </div>
        </div>

        {/* Main Content & Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-navy">Tentang Kegiatan</h2>
              <p className="text-base text-soft-600 leading-relaxed whitespace-pre-line">
                {program.description}
              </p>
            </section>

            <section className="rounded-2xl border border-soft-300 bg-white p-6 space-y-3 shadow-card">
              <div className="flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-wide">
                <Target size={16} className="text-navy" />
                <span>Tujuan & Sasaran Kegiatan</span>
              </div>
              <p className="text-sm text-soft-700 leading-relaxed">
                {program.objective}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-soft-300 bg-white p-6 shadow-card space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-soft-500">
                Penanggung Jawab
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/10 border border-navy/15 text-navy">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{program.responsibleDivision}</p>
                  <p className="text-xs text-soft-500">IMMAPA Telkom University</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-soft-300 bg-soft-100 p-6 text-center space-y-3">
              <p className="text-sm font-bold text-navy">Ingin Bermitra di Acara Ini?</p>
              <p className="text-xs text-soft-500">
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
          <div className="pt-10 border-t border-soft-300 space-y-6">
            <h3 className="text-xl font-bold text-navy">Program Terkait</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPrograms.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/programs/${rel.slug}`}
                  className="rounded-2xl border border-soft-300 bg-white p-5 shadow-card hover:border-navy/20 hover:shadow-card-hover transition-all flex justify-between items-center group"
                >
                  <div>
                    <span className="text-xs font-semibold text-navy-muted">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-navy mt-1 group-hover:text-navy-light transition-colors">
                      {rel.title}
                    </h4>
                  </div>
                  <ArrowRight size={18} className="text-soft-500 group-hover:text-navy group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
