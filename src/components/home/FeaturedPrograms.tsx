import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Program } from '@/types';
import { formatDate } from '@/lib/utils';

interface FeaturedProgramsProps {
  programs: Program[];
}

export default function FeaturedPrograms({ programs }: FeaturedProgramsProps) {
  const featured = programs.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section className="py-24 bg-soft-100 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="badge-navy mb-3">
              <Sparkles size={13} />
              <span>AGENDA UNGGULAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Program Kerja Unggulan
            </h2>
            <p className="mt-3 text-soft-600 text-base max-w-xl">
              Ragam kegiatan kebudayaan, keolahragaan, dan aksi kemanusiaan yang mewarnai perjalanan IMMAPA.
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-navy-light transition-colors"
          >
            <span>Lihat Semua Program</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((prog) => (
            <article
              key={prog.id}
              className="group flex flex-col rounded-2xl border border-soft-300 bg-white overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-navy/20 hover:-translate-y-1.5"
            >
              {/* Category banner */}
              <div className="relative h-48 bg-gradient-to-br from-navy to-navy-mid p-6 flex flex-col justify-between text-white overflow-hidden">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold text-white">
                    {prog.category}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                      prog.status === 'COMPLETED'
                        ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30'
                        : prog.status === 'ONGOING'
                        ? 'bg-amber-500/20 text-amber-200 border border-amber-500/30'
                        : 'bg-white/20 text-white border border-white/30'
                    }`}
                  >
                    {prog.status === 'COMPLETED'
                      ? 'Terlaksana'
                      : prog.status === 'ONGOING'
                      ? 'Sedang Berjalan'
                      : 'Mendatang'}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-extrabold text-white leading-snug">
                    {prog.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-5 bg-white">
                <p className="text-sm text-soft-600 line-clamp-3 leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-soft-300 text-xs text-soft-500">
                  {prog.activityDate && (
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-navy" />
                      <span>{formatDate(prog.activityDate)}</span>
                    </div>
                  )}
                  {prog.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-soft-600" />
                      <span className="truncate">{prog.location}</span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/programs/${prog.slug}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-soft-200 border border-soft-300 py-2.5 text-xs font-bold text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                >
                  <span>Detail Program</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
