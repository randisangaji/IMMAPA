'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Program } from '@/types';
import { formatDate } from '@/lib/utils';
import { Search, Calendar, MapPin, ArrowRight, Filter } from 'lucide-react';

interface ProgramsListClientProps {
  initialPrograms: Program[];
}

const CATEGORIES = ['ALL', 'Kebudayaan', 'Olahraga', 'Keluarga', 'Pengabdian', 'Akademik'];
const STATUSES = ['ALL', 'UPCOMING', 'ONGOING', 'COMPLETED'];

export default function ProgramsListClient({ initialPrograms }: ProgramsListClientProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  const filteredPrograms = initialPrograms.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'ALL' ||
      p.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesStatus =
      selectedStatus === 'ALL' || p.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="rounded-2xl border border-soft-300 bg-white p-6 shadow-card space-y-5">
        {/* Search input */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-500" />
          <input
            type="text"
            placeholder="Cari program kerja, festival, atau kegiatan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-soft-300 bg-soft-100 pl-11 pr-4 py-3 text-sm text-navy placeholder:text-soft-500 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/20 transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-soft-300">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-soft-500 mr-1 flex items-center gap-1">
              <Filter size={12} className="text-navy" />
              Kategori:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-navy text-white shadow-navy-glow'
                    : 'bg-soft-200 text-soft-600 hover:bg-soft-300 hover:text-navy'
                }`}
              >
                {cat === 'ALL' ? 'Semua' : cat}
              </button>
            ))}
          </div>

          {/* Status Filters */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-soft-500 mr-1">Status:</span>
            {STATUSES.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`rounded-xl px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                  selectedStatus === st
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-soft-200 text-soft-600 hover:bg-soft-300 hover:text-navy'
                }`}
              >
                {st === 'ALL' ? 'Semua' : st === 'UPCOMING' ? 'Mendatang' : st === 'ONGOING' ? 'Berjalan' : 'Terlaksana'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Program Grid */}
      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <article
              key={prog.id}
              className="group flex flex-col rounded-2xl border border-soft-300 bg-white overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-navy/20 hover:-translate-y-1.5"
            >
              {/* Category banner */}
              <div className="relative h-44 bg-gradient-to-br from-navy to-navy-mid p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
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
                <h3 className="text-lg font-extrabold text-white leading-snug">
                  {prog.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4 bg-white">
                <p className="text-sm text-soft-600 line-clamp-3 leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-soft-300 text-xs text-soft-500">
                  {prog.activityDate && (
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-navy" />
                      <span>{formatDate(prog.activityDate)}</span>
                    </div>
                  )}
                  {prog.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-soft-600" />
                      <span className="truncate">{prog.location}</span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/programs/${prog.slug}`}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-soft-200 border border-soft-300 py-2.5 text-xs font-bold text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                >
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-soft-300 bg-white p-12 text-center text-soft-500">
          <p className="text-base font-semibold text-navy">Tidak ada program yang sesuai kriteria pencarian.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('ALL');
              setSelectedStatus('ALL');
            }}
            className="mt-4 text-sm font-bold text-navy hover:underline cursor-pointer"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}
