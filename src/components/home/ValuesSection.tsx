import { Heart, Compass, Shield, Users } from 'lucide-react';
import { OrgProfile } from '@/types';

interface ValuesSectionProps {
  values: OrgProfile['values'];
}

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Compass,
  Shield,
  Users,
};

export default function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="py-20 bg-accent-gray/60 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-navy shadow-xs mb-3">
            <span>NILAI-NILAI UTAMA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Pilar Kebersamaan & Karakter
          </h2>
          <p className="mt-4 text-gray-600 text-base">
            Nilai-nilai luhur yang menuntun gerak langkah setiap pengurus dan anggota IMMAPA dalam berkarya dan berkehidupan kampus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = iconMap[v.icon] || Heart;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-cenderawasih-pink/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/80 text-navy mb-5 transition-colors group-hover:bg-cenderawasih-pink group-hover:text-white">
                    <Icon size={24} className="text-navy" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
