import type { Metadata } from 'next';
import { dataService } from '@/services/storage';
import GalleryClient from '@/components/gallery/GalleryClient';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Galeri Dokumentasi',
  description:
    'Galeri foto dan video arsip kegiatan budaya, olahraga, pengabdian, dan kebersamaan IMMAPA Telkom University sejak 2017.',
};

export default async function GalleryPage() {
  const items = await dataService.getGallery();

  return (
    <div className="py-16 sm:py-20 bg-soft-100 text-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-navy mb-4">
            <Sparkles size={14} />
            <span>ARSIP MULTIMEDIA RESMI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
            Galeri Kenangan <span className="text-gradient-navy">IMMAPA</span>
          </h1>
          <p className="text-base sm:text-lg text-soft-600 leading-relaxed">
            Menyaksikan jejak tarian, peluh perjuangan olahraga, kehangatan kumpul keluarga, dan pengabdian nyata sejak 2017.
          </p>
        </div>

        <GalleryClient initialItems={items} />
      </div>
    </div>
  );
}
