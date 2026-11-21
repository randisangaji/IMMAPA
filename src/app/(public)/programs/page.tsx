import type { Metadata } from 'next';
import { dataService } from '@/services/storage';
import ProgramsListClient from '@/components/programs/ProgramsListClient';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program Kerja & Kegiatan',
  description:
    'Daftar lengkap program kerja, kegiatan rutin kebudayaan, olahraga, dan pengabdian masyarakat IMMAPA Telkom University.',
};

export default async function ProgramsPage() {
  const programs = await dataService.getPrograms();

  return (
    <div className="py-16 sm:py-20 bg-soft-100 text-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-navy mb-4">
            <Sparkles size={14} />
            <span>AGENDA & AKTIVITAS RESMI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
            Program Kerja <span className="text-gradient-navy">IMMAPA</span>
          </h1>
          <p className="text-base sm:text-lg text-soft-600 leading-relaxed">
            Eksplorasi kegiatan seni budaya, kompetisi olahraga, pengabdian masyarakat, dan forum akademik mahasiswa Indonesia Timur.
          </p>
        </div>

        <ProgramsListClient initialPrograms={programs} />
      </div>
    </div>
  );
}
