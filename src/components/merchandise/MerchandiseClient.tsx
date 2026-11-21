'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product, ContactInfo } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { ShoppingBag, MessageCircle, ExternalLink, ArrowRight, Tag } from 'lucide-react';

interface MerchandiseClientProps {
  products: Product[];
  contact: ContactInfo;
}

const CATEGORIES = ['ALL', 'Jersey Futsal', 'T-Shirt', 'Jaket', 'Aksesoris'];

export default function MerchandiseClient({ products, contact }: MerchandiseClientProps) {
  const [selectedCat, setSelectedCat] = useState('ALL');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const filteredProducts = products.filter(
    (p) => selectedCat === 'ALL' || p.category.toLowerCase() === selectedCat.toLowerCase()
  );

  const handleOrder = (product: Product, size?: string) => {
    const sizeText = size || product.sizes[0] || 'All Size';
    const message = encodeURIComponent(
      `Halo Pengurus IMMAPA Telkom University,\n\nSaya tertarik untuk memesan official merchandise:\n- Produk: ${product.name}\n- Kategori: ${product.category}\n- Ukuran: ${sizeText}\n\nMohon informasi ketersediaan stok dan prosedur pemesanan. Terima kasih! 🙏`
    );

    if (contact.whatsapp) {
      const cleanPhone = contact.whatsapp.replace(/[^0-9]/g, '');
      window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
    } else {
      // Fallback to Instagram DM
      window.open(`https://www.instagram.com/immapa_tu/`, '_blank');
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-colors whitespace-nowrap ${
              selectedCat === cat
                ? 'bg-navy text-white shadow-xs'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
            }`}
          >
            {cat === 'ALL' ? 'Semua Produk' : cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="group flex flex-col rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image Placeholder Frame */}
            <div className="relative aspect-square w-full bg-gradient-to-tr from-accent-blue/40 to-white flex items-center justify-center p-6 border-b border-gray-100">
              <div className="flex flex-col items-center text-center">
                <ShoppingBag size={48} className="text-navy group-hover:scale-110 transition-transform mb-2" />
                <span className="text-[11px] font-semibold text-cenderawasih-pink uppercase tracking-wider">
                  {prod.category}
                </span>
              </div>
              <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-navy shadow-xs">
                {prod.isAvailable ? 'Tersedia' : 'Pre-Order'}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-bold text-navy group-hover:text-cenderawasih-pink transition-colors line-clamp-1">
                  {prod.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                  {prod.description}
                </p>
              </div>

              {/* Sizes and Price */}
              <div className="space-y-3 pt-2 border-t border-gray-100">
                <div className="flex flex-wrap gap-1">
                  {prod.sizes.map((s) => (
                    <span
                      key={s}
                      className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">Harga</p>
                    <p className="text-sm font-extrabold text-navy">
                      {formatRupiah(prod.price)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOrder(prod)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-cenderawasih-pink px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#c43e74] transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>Pesan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Notice info */}
      <div className="rounded-2xl border border-gray-100 bg-accent-blue/30 p-5 text-center text-xs text-gray-600 max-w-2xl mx-auto">
        <p>
          💡 Pemesanan langsung terhubung ke WhatsApp pengurus atau Instagram{' '}
          <a
            href="https://www.instagram.com/immapa_tu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-navy hover:underline"
          >
            @immapa_tu
          </a>
          . Hasil penjualan merchandise digunakan untuk mendukung operasional kegiatan dan pagelaran seni IMMAPA.
        </p>
      </div>
    </div>
  );
}
