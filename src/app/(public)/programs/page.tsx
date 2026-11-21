import type { Metadata } from 'next';
import { dataService } from '@/services/storage';
import ProgramsListClient from '@/components/programs/ProgramsListClient';
import { Calendar, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program Kerja & Kegiatan',
  description:
    'Daftar lengkap program kerja, kegiatan rutin kebudayaan, olahraga, dan pengabdian masyarakat IMMAPA Telkom University.',
};

export default async function ProgramsPage() {
  const programs = await dataService.getPrograms();

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-blue/60 px-4 py-1.5 text-xs font-semibold text-navy mb-4">
            <Sparkles size={14} className="text-cenderawasih-pink" />
            <span>AGENDA & AKTIVITAS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Program Kerja <span className="text-gradient-cenderawasih">IMMAPA</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Eksplorasi kegiatan seni budaya, kompetisi olahraga, pengabdian masyarakat, dan forum akademik mahasiswa Indonesia Timur.
          </p>
        </div>

        {/* Client filter & program list */}
        <ProgramsListClient initialPrograms={programs} />
      </div>
    </div>
  );
}
