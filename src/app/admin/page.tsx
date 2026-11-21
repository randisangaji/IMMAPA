import Link from 'next/link';
import { dataService } from '@/services/storage';
import {
  Award,
  Calendar,
  Camera,
  ShoppingBag,
  Handshake,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default async function AdminDashboardPage() {
  const cabinets = await dataService.getCabinets();
  const programs = await dataService.getPrograms();
  const gallery = await dataService.getGallery();
  const products = await dataService.getProducts();
  const inquiries = await dataService.getInquiries();
  const recruitment = await dataService.getRecruitment();

  const stats = [
    {
      label: 'Arsip Kabinet',
      value: cabinets.length,
      sub: '2017 – 2024/2025',
      href: '/admin/cabinets',
      icon: Award,
    },
    {
      label: 'Program Kerja',
      value: programs.length,
      sub: `${programs.filter((p) => p.status === 'COMPLETED').length} Terlaksana`,
      href: '/admin/programs',
      icon: Calendar,
    },
    {
      label: 'Arsip Galeri',
      value: gallery.length,
      sub: 'Foto & Video Dokumentasi',
      href: '/admin/gallery',
      icon: Camera,
    },
    {
      label: 'Katalog Merchandise',
      value: products.length,
      sub: 'Jersey, Kaos, Aksesoris',
      href: '/admin/merchandise',
      icon: ShoppingBag,
    },
    {
      label: 'Proposal Kolaborasi',
      value: inquiries.length,
      sub: `${inquiries.filter((i) => !i.isReviewed).length} Belum Ditinjau`,
      href: '/admin/collaboration',
      icon: Handshake,
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Welcome Banner in Midnight-Crimson Bento */}
      <div className="rounded-3xl border border-white/10 bg-midnight-900 p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-crimson/15 blur-[100px]" />

        <div className="relative z-10">
          <div className="badge-crimson mb-3">
            <Sparkles size={12} />
            <span>Sistem Administrasi Konten</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Selamat Datang, Pengurus IMMAPA
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
            Kelola profil organisasi, arsip kabinet, program kerja, galeri dokumentasi, merchandise, serta permohonan kolaborasi dengan mudah.
          </p>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <Link
            href="/admin/recruitment"
            className="btn-primary text-xs py-2.5 px-4"
          >
            Status Rekrutmen: {recruitment.status}
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Link
              key={idx}
              href={s.href}
              className="rounded-3xl border border-white/10 bg-midnight-900/90 p-6 shadow-lg backdrop-blur-xl hover:border-crimson/50 hover:shadow-glow-crimson transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-crimson/15 border border-crimson/30 text-crimson-light group-hover:bg-crimson group-hover:text-white transition-colors">
                  <Icon size={20} />
                </div>
                <ArrowRight size={14} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div className="mt-5">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs font-bold text-gray-200 mt-0.5">{s.label}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Action Tables in Midnight Glass */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Programs */}
        <div className="rounded-3xl border border-white/10 bg-midnight-900/90 p-6 shadow-lg space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Calendar size={18} className="text-crimson" />
              <span>Program Kerja Terdaftar</span>
            </h3>
            <Link href="/admin/programs" className="text-xs font-bold text-crimson-light hover:underline">
              Kelola Program →
            </Link>
          </div>
          <div className="space-y-3">
            {programs.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between rounded-2xl bg-midnight-850 p-3.5 text-xs border border-white/5"
              >
                <div>
                  <p className="font-bold text-white">{p.title}</p>
                  <p className="text-[11px] text-gray-400">{p.category} · {p.responsibleDivision}</p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    p.status === 'COMPLETED'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : p.status === 'ONGOING'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-crimson/20 text-crimson-light border border-crimson/30'
                  }`}
                >
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="rounded-3xl border border-white/10 bg-midnight-900/90 p-6 shadow-lg space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Handshake size={18} className="text-crimson" />
              <span>Pengajuan Kolaborasi Masuk</span>
            </h3>
            <Link href="/admin/collaboration" className="text-xs font-bold text-crimson-light hover:underline">
              Lihat Semua →
            </Link>
          </div>

          {inquiries.length > 0 ? (
            <div className="space-y-3">
              {inquiries.slice(0, 4).map((inq) => (
                <div
                  key={inq.id}
                  className="rounded-2xl bg-midnight-850 p-3.5 text-xs space-y-1.5 border border-white/5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-white">{inq.companyName}</p>
                    <span className="text-[10px] text-crimson-light font-bold">{inq.category}</span>
                  </div>
                  <p className="text-[11px] text-gray-300 line-clamp-1">{inq.message}</p>
                  <p className="text-[10px] text-gray-400">Kontak: {inq.contactPerson} ({inq.email})</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-gray-400">
              Belum ada permohonan kemitraan masuk.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
