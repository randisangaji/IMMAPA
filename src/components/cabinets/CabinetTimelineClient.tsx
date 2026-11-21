'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Cabinet } from '@/types';
import { Calendar, Users, Sparkles } from 'lucide-react';

interface CabinetTimelineClientProps {
  cabinets: Cabinet[];
}

export default function CabinetTimelineClient({ cabinets }: CabinetTimelineClientProps) {
  const [selectedYear, setSelectedYear] = useState<number>(cabinets[0]?.year || 2024);

  const selectedCabinet = cabinets.find((c) => c.year === selectedYear) || cabinets[0];

  return (
    <div className="space-y-12">
      {/* Year Selector */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none">
        {cabinets.map((cab) => {
          const isSelected = cab.year === selectedYear;
          return (
            <button
              key={cab.id}
              onClick={() => setSelectedYear(cab.year)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? 'bg-navy text-white border-navy shadow-navy-glow scale-105'
                  : 'bg-white text-soft-600 border-soft-300 hover:border-navy/20 hover:text-navy'
              }`}
            >
              <Calendar size={16} className={isSelected ? 'text-white' : 'text-navy'} />
              <span>Tahun {cab.year}</span>
              {cab.isActive && (
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white">
                  Aktif
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Cabinet Card */}
      {selectedCabinet && (
        <div className="rounded-2xl border border-soft-300 bg-white p-6 sm:p-10 shadow-elevated animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Logo & Period */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-2xl bg-soft-100 p-4 border border-soft-300 shadow-inner mb-4 flex items-center justify-center">
                <Image
                  src={selectedCabinet.cabinetLogoUrl || '/logos/logo-immapa.png'}
                  alt={`Logo ${selectedCabinet.cabinetName}`}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <span className="rounded-full bg-navy px-4 py-1.5 text-xs font-bold text-white mb-2 shadow-navy-glow">
                Periode {selectedCabinet.periodName}
              </span>
              {selectedCabinet.isActive && (
                <span className="text-xs font-bold text-navy flex items-center gap-1">
                  <Sparkles size={12} />
                  Kepengurusan Sedang Menjabat
                </span>
              )}
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  {selectedCabinet.cabinetName}
                </h3>
                <p className="mt-2 text-soft-600 text-base leading-relaxed">
                  {selectedCabinet.description}
                </p>
              </div>

              {selectedCabinet.philosophy && (
                <div className="rounded-xl border-l-4 border-navy bg-soft-100 p-5 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy-muted">
                    Filosofi Kabinet
                  </p>
                  <p className="text-sm text-soft-700 italic leading-relaxed">
                    &ldquo;{selectedCabinet.philosophy}&rdquo;
                  </p>
                  {selectedCabinet.logoMeaning && (
                    <p className="text-xs text-soft-500 pt-1">
                      <strong>Makna Lambang:</strong> {selectedCabinet.logoMeaning}
                    </p>
                  )}
                </div>
              )}

              {/* Leaders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-soft-300 bg-soft-100 p-4">
                  <p className="text-xs text-soft-500 uppercase font-semibold">Ketua Umum</p>
                  <p className="text-base font-extrabold text-navy mt-0.5">
                    {selectedCabinet.chairperson}
                  </p>
                </div>

                <div className="rounded-xl border border-soft-300 bg-soft-100 p-4">
                  <p className="text-xs text-soft-500 uppercase font-semibold">Wakil Ketua</p>
                  <p className="text-base font-extrabold text-navy mt-0.5">
                    {selectedCabinet.viceChairperson || 'Menunggu Verifikasi'}
                  </p>
                </div>
              </div>

              {/* Divisions */}
              {selectedCabinet.divisions && selectedCabinet.divisions.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-soft-300">
                  <h4 className="text-base font-bold text-navy flex items-center gap-2">
                    <Users size={18} className="text-navy" />
                    <span>Divisi & Pengurus Kabinet</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCabinet.divisions.map((div, dIdx) => (
                      <div
                        key={dIdx}
                        className="rounded-xl border border-soft-300 bg-soft-100 p-4 space-y-2"
                      >
                        <p className="text-sm font-bold text-navy">{div.name}</p>
                        {div.description && (
                          <p className="text-xs text-soft-500">{div.description}</p>
                        )}
                        <ul className="text-xs text-soft-600 space-y-1.5 pt-1">
                          {div.members.map((m) => (
                            <li key={m.id} className="flex items-center justify-between">
                              <span className="font-semibold text-navy">{m.name}</span>
                              <span className="text-[11px] text-soft-500">{m.role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
