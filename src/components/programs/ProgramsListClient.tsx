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
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari program kerja, festival, atau kegiatan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-11 pr-4 py-2.5 text-sm text-navy placeholder:text-gray-400 focus:border-navy focus:bg-white focus:outline-none transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-gray-400 mr-1 flex items-center gap-1">
              <Filter size={12} />
              Kategori:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat === 'ALL' ? 'Semua' : cat}
              </button>
            ))}
          </div>

          {/* Status Filters */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-gray-400 mr-1">Status:</span>
            {STATUSES.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                  selectedStatus === st
                    ? 'bg-cenderawasih-pink text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
              className="group flex flex-col rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category banner / Header */}
              <div className="relative h-44 bg-gradient-to-br from-navy to-navy-800 p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
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
                <h3 className="text-lg font-bold text-white group-hover:text-cenderawasih-gold transition-colors">
                  {prog.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-500">
                  {prog.activityDate && (
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-cenderawasih-pink" />
                      <span>{formatDate(prog.activityDate)}</span>
                    </div>
                  )}
                  {prog.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-cenderawasih-gold" />
                      <span className="truncate">{prog.location}</span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/programs/${prog.slug}`}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-blue/50 py-2.5 text-xs font-semibold text-navy hover:bg-navy hover:text-white transition-all duration-200"
                >
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center text-gray-500">
          <p className="text-base font-semibold">Tidak ada program yang sesuai kriteria pencarian.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('ALL');
              setSelectedStatus('ALL');
            }}
            className="mt-4 text-sm font-semibold text-cenderawasih-pink hover:underline"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}
