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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-cenderawasih-pink/10 px-3 py-1 text-xs font-semibold text-cenderawasih-pink mb-3">
              <Sparkles size={13} />
              <span>AGENDA UNGGULAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Program Kerja Unggulan
            </h2>
            <p className="mt-3 text-gray-600 text-base max-w-xl">
              Ragam kegiatan kebudayaan, keolahragaan, dan aksi kemanusiaan yang mewarnai perjalanan IMMAPA.
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-cenderawasih-pink transition-colors"
          >
            <span>Lihat Semua Program</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((prog) => (
            <article
              key={prog.id}
              className="group flex flex-col rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category banner / Header */}
              <div className="relative h-48 bg-gradient-to-br from-navy to-navy-800 p-6 flex flex-col justify-between text-white overflow-hidden">
                <div className="absolute inset-0 bg-navy opacity-80" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                    {prog.category}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      prog.status === 'COMPLETED'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : prog.status === 'ONGOING'
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-blue-500/20 text-blue-200'
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
                  <h3 className="text-xl font-bold text-white group-hover:text-cenderawasih-gold transition-colors">
                    {prog.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-500">
                  {prog.activityDate && (
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-cenderawasih-pink" />
                      <span>{formatDate(prog.activityDate)}</span>
                    </div>
                  )}
                  {prog.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-cenderawasih-gold" />
                      <span className="truncate">{prog.location}</span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/programs/${prog.slug}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-blue/50 py-2.5 text-xs font-semibold text-navy hover:bg-navy hover:text-white transition-all duration-200"
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
