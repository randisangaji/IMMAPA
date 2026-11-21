'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types';
import { X, Play, Filter, Calendar, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryClientProps {
  initialItems: GalleryItem[];
}

const CATEGORIES = ['ALL', 'Kebudayaan', 'Olahraga', 'Keluarga', 'Pengabdian'];
const YEARS = ['ALL', 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

export default function GalleryClient({ initialItems }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState<string | number>('ALL');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = initialItems.filter((item) => {
    const matchesCat =
      selectedCategory === 'ALL' ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesYear =
      selectedYear === 'ALL' || item.year === Number(selectedYear);
    return matchesCat && matchesYear;
  });

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        const currIdx = filteredItems.findIndex((i) => i.id === activeItem.id);
        if (currIdx < filteredItems.length - 1) {
          setActiveItem(filteredItems[currIdx + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currIdx = filteredItems.findIndex((i) => i.id === activeItem.id);
        if (currIdx > 0) {
          setActiveItem(filteredItems[currIdx - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, filteredItems]);

  return (
    <div className="space-y-8">
      {/* Filter Toolbar */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        {/* Category Pills */}
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

        {/* Year Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-xs font-semibold text-gray-400 mr-1 flex items-center gap-1">
            <Calendar size={12} />
            Tahun:
          </span>
          {YEARS.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                selectedYear === yr
                  ? 'bg-cenderawasih-pink text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {yr === 'ALL' ? 'Semua' : yr}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-navy-900 aspect-4/3 shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {item.type === 'VIDEO' ? (
                <div className="relative h-full w-full bg-navy flex items-center justify-center p-6 text-center text-white">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cenderawasih-pink text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={24} className="fill-white translate-x-0.5" />
                    </div>
                    <span className="text-xs font-semibold text-cenderawasih-gold uppercase tracking-wider">
                      Video YouTube
                    </span>
                    <p className="text-sm font-bold max-w-xs">{item.title}</p>
                  </div>
                </div>
              ) : (
                <div className="relative h-full w-full bg-gradient-to-tr from-navy to-navy-800 flex items-center justify-center p-6 text-center text-white">
                  <div className="flex flex-col items-center gap-2">
                    <Camera size={32} className="text-cenderawasih-pink/80 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-bold max-w-xs">{item.title}</p>
                    <span className="text-[11px] text-gray-300">{item.description}</span>
                  </div>
                </div>
              )}

              {/* Overlay metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-center">
                  <span className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    {item.category}
                  </span>
                  <span className="rounded-full bg-cenderawasih-gold/30 px-2 py-0.5 text-[11px] font-bold text-cenderawasih-gold">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs text-white/90 font-medium">Klik untuk memperbesar</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center text-gray-500">
          <p className="text-base font-semibold">Tidak ada dokumentasi pada kriteria ini.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-navy-900 border border-navy-700 p-6 text-white overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              aria-label="Tutup"
            >
              <X size={20} />
            </button>

            {/* Media Content */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black mb-4">
              {activeItem.type === 'VIDEO' ? (
                <iframe
                  src={activeItem.url}
                  title={activeItem.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-navy p-8 text-center">
                  <div>
                    <Camera size={48} className="mx-auto text-cenderawasih-pink mb-3" />
                    <h3 className="text-xl font-bold">{activeItem.title}</h3>
                    <p className="text-sm text-gray-300 mt-2 max-w-md">{activeItem.description}</p>
                    <span className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-cenderawasih-gold">
                      Tahun {activeItem.year} · {activeItem.category}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-base font-bold text-white">{activeItem.title}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{activeItem.description}</p>
              </div>
              <span className="text-xs text-gray-400">
                Tekan <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">Esc</kbd> untuk menutup
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
