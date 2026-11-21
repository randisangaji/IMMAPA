import Link from 'next/link';
import { dataService } from '@/services/storage';
import {
  Award,
  Calendar,
  Camera,
  ShoppingBag,
  Handshake,
  ArrowRight,
  TrendingUp,
  Clock,
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
      color: 'text-navy',
      bg: 'bg-accent-blue',
    },
    {
      label: 'Program Kerja',
      value: programs.length,
      sub: `${programs.filter((p) => p.status === 'COMPLETED').length} Terlaksana`,
      href: '/admin/programs',
      icon: Calendar,
      color: 'text-cenderawasih-pink',
      bg: 'bg-cenderawasih-pink/10',
    },
    {
      label: 'Arsip Galeri',
      value: gallery.length,
      sub: 'Foto & Video Dokumentasi',
      href: '/admin/gallery',
      icon: Camera,
      color: 'text-cenderawasih-gold',
      bg: 'bg-cenderawasih-gold/20',
    },
    {
      label: 'Katalog Merchandise',
      value: products.length,
      sub: 'Jersey, Kaos, Aksesoris',
      href: '/admin/merchandise',
      icon: ShoppingBag,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      label: 'Proposal Kolaborasi',
      value: inquiries.length,
      sub: `${inquiries.filter((i) => !i.isReviewed).length} Belum Ditinjau`,
      href: '/admin/collaboration',
      icon: Handshake,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-navy p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-cenderawasih-gold mb-3">
            <Sparkles size={12} />
            <span>Sistem Administrasi Konten</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Selamat Datang, Pengurus IMMAPA
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
            Kelola profil organisasi, arsip kabinet, program kerja, galeri dokumentasi, merchandise, serta permohonan kolaborasi dengan mudah.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/recruitment"
            className="rounded-xl bg-cenderawasih-pink px-4 py-2.5 text-xs font-bold text-white hover:bg-[#c43e74] transition-colors"
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
              className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-xs hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.bg} ${s.color}`}>
                  <Icon size={20} />
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-navy group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="mt-4">
                <p className="text-2xl font-extrabold text-navy">{s.value}</p>
                <p className="text-xs font-bold text-gray-700 mt-0.5">{s.label}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Action Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Programs */}
        <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="text-base font-bold text-navy flex items-center gap-2">
              <Calendar size={18} className="text-cenderawasih-pink" />
              <span>Program Kerja Terdaftar</span>
            </h3>
            <Link href="/admin/programs" className="text-xs font-semibold text-navy hover:underline">
              Kelola Program →
            </Link>
          </div>
          <div className="space-y-3">
            {programs.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between rounded-xl bg-gray-50 p-3 text-xs"
              >
                <div>
                  <p className="font-bold text-navy">{p.title}</p>
                  <p className="text-[11px] text-gray-400">{p.category} · {p.responsibleDivision}</p>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    p.status === 'COMPLETED'
                      ? 'bg-emerald-100 text-emerald-800'
                      : p.status === 'ONGOING'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h3 className="text-base font-bold text-navy flex items-center gap-2">
              <Handshake size={18} className="text-cenderawasih-gold" />
              <span>Pengajuan Kolaborasi Masuk</span>
            </h3>
            <Link href="/admin/collaboration" className="text-xs font-semibold text-navy hover:underline">
              Lihat Semua →
            </Link>
          </div>

          {inquiries.length > 0 ? (
            <div className="space-y-3">
              {inquiries.slice(0, 4).map((inq) => (
                <div
                  key={inq.id}
                  className="rounded-xl bg-gray-50 p-3 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-navy">{inq.companyName}</p>
                    <span className="text-[10px] text-gray-400">{inq.category}</span>
                  </div>
                  <p className="text-[11px] text-gray-600 line-clamp-1">{inq.message}</p>
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
