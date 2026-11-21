import type { Metadata } from 'next';
import { dataService } from '@/services/storage';
import MerchandiseClient from '@/components/merchandise/MerchandiseClient';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Katalog Merchandise Resmi',
  description:
    'Katalog merchandise resmi IMMAPA Telkom University: Jersey futsal, T-shirt etnik Cenderawasih, hoodie, dan aksesoris.',
};

export default async function MerchandisePage() {
  const products = await dataService.getProducts();
  const contact = await dataService.getContact();

  return (
    <div className="py-16 sm:py-20 bg-soft-100 text-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-navy mb-4">
            <Sparkles size={14} />
            <span>OFFICIAL MERCHANDISE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
            Katalog Merchandise <span className="text-gradient-navy">IMMAPA</span>
          </h1>
          <p className="text-base sm:text-lg text-soft-600 leading-relaxed">
            Miliki atribut kebanggaan dengan motif etnik khas Indonesia Timur dan dukung program kerja organisasi.
          </p>
        </div>

        <MerchandiseClient products={products} contact={contact} />
      </div>
    </div>
  );
}
