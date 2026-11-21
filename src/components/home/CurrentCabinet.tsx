import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, ShieldCheck, HelpCircle } from 'lucide-react';
import { Cabinet } from '@/types';

interface CurrentCabinetProps {
  cabinet?: Cabinet;
}

export default function CurrentCabinet({ cabinet }: CurrentCabinetProps) {
  if (!cabinet) return null;

  return (
    <section className="py-24 bg-white relative border-t border-soft-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-soft-300 bg-white p-8 sm:p-12 shadow-elevated relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-navy/5 blur-[100px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Logo / Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-2xl bg-soft-100 p-4 border border-soft-300 shadow-inner mb-4 flex items-center justify-center">
                <Image
                  src={cabinet.cabinetLogoUrl || '/logos/logo-immapa.png'}
                  alt={`Logo ${cabinet.cabinetName}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="rounded-full bg-navy px-4 py-1.5 text-xs font-bold text-white tracking-wide shadow-navy-glow">
                Periode {cabinet.periodName}
              </span>
            </div>

            {/* Cabinet Info */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-muted mb-2">
                  <Award size={14} className="text-navy" />
                  <span>KABINET AKTIF KEPENGURUSAN</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                  {cabinet.cabinetName}
                </h2>
              </div>

              <p className="text-soft-600 text-base leading-relaxed">
                {cabinet.description}
              </p>

              {cabinet.philosophy && (
                <div className="rounded-xl border-l-4 border-navy bg-soft-100 p-5 text-sm text-soft-700 italic leading-relaxed">
                  &ldquo;{cabinet.philosophy}&rdquo;
                </div>
              )}

              {/* Leadership */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-soft-300 bg-soft-100 p-4">
                  <p className="text-xs font-semibold text-soft-500 uppercase tracking-wide">
                    Ketua Umum
                  </p>
                  <p className="text-base font-extrabold text-navy mt-1">
                    {cabinet.chairperson}
                  </p>
                  <p className="text-[11px] text-soft-500 flex items-center gap-1 mt-1">
                    <ShieldCheck size={12} className="text-navy" />
                    BPH IMMAPA
                  </p>
                </div>

                <div className="rounded-xl border border-soft-300 bg-soft-100 p-4">
                  <p className="text-xs font-semibold text-soft-500 uppercase tracking-wide">
                    Wakil Ketua
                  </p>
                  <p className="text-base font-extrabold text-navy mt-1">
                    {cabinet.viceChairperson || 'Menunggu Verifikasi'}
                  </p>
                  <p className="text-[11px] text-soft-500 flex items-center gap-1 mt-1">
                    <ShieldCheck size={12} className="text-navy" />
                    BPH IMMAPA
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/history-cabinets"
                  className="btn-primary text-xs py-3 px-6"
                >
                  <span>Lihat Struktur & Arsip Lengkap (2017–2025)</span>
                  <ArrowRight size={16} />
                </Link>
                <span className="text-xs text-soft-500 flex items-center gap-1">
                  <HelpCircle size={13} className="text-navy" />
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
