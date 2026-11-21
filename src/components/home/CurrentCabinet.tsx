import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Users, ShieldCheck, HelpCircle } from 'lucide-react';
import { Cabinet } from '@/types';

interface CurrentCabinetProps {
  cabinet?: Cabinet;
}

export default function CurrentCabinet({ cabinet }: CurrentCabinetProps) {
  if (!cabinet) return null;

  return (
    <section className="py-20 bg-accent-blue/20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Logo / Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-2xl bg-gradient-to-tr from-accent-blue/40 to-white p-3 border border-gray-100 shadow-inner mb-4 flex items-center justify-center">
                <Image
                  src={cabinet.cabinetLogoUrl || '/logos/logo-immapa.png'}
                  alt={`Logo ${cabinet.cabinetName}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="rounded-full bg-navy px-3.5 py-1 text-xs font-bold text-white tracking-wide">
                Periode {cabinet.periodName}
              </span>
            </div>

            {/* Cabinet Info */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cenderawasih-pink mb-2">
                  <Award size={14} />
                  <span>KABINET AKTIF</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                  {cabinet.cabinetName}
                </h2>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">
                {cabinet.description}
              </p>

              {cabinet.philosophy && (
                <div className="rounded-2xl border-l-4 border-cenderawasih-gold bg-accent-gray/70 p-4 text-sm text-gray-700 italic">
                  &ldquo;{cabinet.philosophy}&rdquo;
                </div>
              )}

              {/* Leadership placeholders with transparent notice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-gray-100 bg-accent-blue/30 p-4">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Ketua Umum
                  </p>
                  <p className="text-base font-bold text-navy mt-1">
                    {cabinet.chairperson}
                  </p>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                    <ShieldCheck size={12} className="text-navy" />
                    BPH IMMAPA
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-accent-blue/30 p-4">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Wakil Ketua
                  </p>
                  <p className="text-base font-bold text-navy mt-1">
                    {cabinet.viceChairperson || 'Menunggu Verifikasi'}
                  </p>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                    <ShieldCheck size={12} className="text-navy" />
                    BPH IMMAPA
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/history-cabinets"
                  className="btn-primary"
                >
                  <span>Lihat Struktur & Arsip Lengkap (2017–2025)</span>
                  <ArrowRight size={16} />
                </Link>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <HelpCircle size={13} />
                  Dapat diperbarui langsung dari Admin Dashboard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
