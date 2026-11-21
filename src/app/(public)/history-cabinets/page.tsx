import type { Metadata } from 'next';
import { dataService } from '@/services/storage';
import CabinetTimelineClient from '@/components/cabinets/CabinetTimelineClient';
import { Award, History } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sejarah & Arsip Kabinet',
  description:
    'Jejak kepemimpinan, sejarah pendirian 2017, dan arsip kabinet IMMAPA Telkom University dari masa ke masa.',
};

export default async function HistoryCabinetsPage() {
  const cabinets = await dataService.getCabinets();

  return (
    <div className="py-16 sm:py-20 bg-white text-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-navy mb-4">
            <History size={14} />
            <span>ARSIP KEPEMIMPINAN 2017 – SEKARANG</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
            Sejarah & Kabinet <span className="text-gradient-navy">IMMAPA</span>
          </h1>
          <p className="text-base sm:text-lg text-soft-600 leading-relaxed">
            Menelusuri jejak perjuangan para inisiator dan estafet kepemimpinan mahasiswa Maluku, Papua, dan NTT di Telkom University.
          </p>
        </div>

        {/* Story of Establishment 2017 */}
        <div className="rounded-2xl bg-soft-100 border border-soft-300 p-8 sm:p-12 text-navy mb-16 shadow-elevated relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-navy/5 blur-[120px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-navy-muted uppercase tracking-wider">
                TITIK AWAL PERJALANAN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Kisah Pendirian IMMAPA (2017)
              </h2>
              <p className="text-sm sm:text-base text-soft-600 leading-relaxed">
                Pada tahun 2017, para perintis mahasiswa asal kepulauan Maluku, Papua, dan Nusa Tenggara Timur yang menempuh pendidikan di Telkom University berhimpun untuk membentuk ikatan persaudaraan. Berangkat dari rasa senasib sepenanggungan di tanah Sunda, lahir kesepakatan untuk mendirikan organisasi resmi yang menjadi payung budaya dan kekeluargaan.
              </p>
              <p className="text-sm sm:text-base text-soft-600 leading-relaxed">
                Dengan lambang Burung Cenderawasih yang megah dan semboyan &ldquo;Kitorang Bisa Kitorang Basodara&rdquo;, IMMAPA telah melewati berbagai periode kepengurusan dan terus melahirkan generasi mahasiswa yang bangga akan identitas kedaerahannya.
              </p>
            </div>
            <div className="lg:col-span-4 rounded-2xl bg-white p-6 text-center border border-soft-300 shadow-card">
              <p className="text-5xl font-black text-navy">2017</p>
              <p className="text-sm font-bold text-navy mt-1">Tahun Bersejarah</p>
              <p className="text-xs text-soft-500 mt-2">
                Deklarasi pendirian Ikatan Mahasiswa Maluku, Papua & NTT Telkom University.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Cabinets Archive */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <Award className="text-navy" size={22} />
            <h2 className="text-2xl font-extrabold text-navy">
              Arsip Kabinet dari Masa ke Masa
            </h2>
          </div>

          <CabinetTimelineClient cabinets={cabinets} />
        </div>
      </div>
    </div>
  );
}
