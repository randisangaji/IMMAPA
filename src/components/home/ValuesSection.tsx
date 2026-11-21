import { Heart, Compass, Shield, Users, Sparkles } from 'lucide-react';
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
    <section className="py-24 bg-white relative border-y border-soft-300 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-navy/3 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-navy mb-3">
            <Sparkles size={12} />
            <span>NILAI-NILAI UTAMA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Pilar Kebersamaan & Karakter
          </h2>
          <p className="mt-4 text-soft-600 text-base leading-relaxed">
            Nilai-nilai luhur yang menuntun gerak langkah setiap pengurus dan anggota IMMAPA dalam berkarya dan berkehidupan kampus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = iconMap[v.icon] || Heart;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-soft-300 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-navy/20 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/10 border border-navy/15 text-navy mb-6 transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-navy-light transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-soft-600 leading-relaxed">
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
