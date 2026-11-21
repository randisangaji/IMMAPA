'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  LayoutDashboard,
  Building,
  Award,
  Calendar,
  Camera,
  ShoppingBag,
  UserPlus,
  Handshake,
  LogOut,
  ExternalLink,
} from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Profil Organisasi', href: '/admin/profile', icon: Building },
  { label: 'Kabinet & Sejarah', href: '/admin/cabinets', icon: Award },
  { label: 'Program Kerja', href: '/admin/programs', icon: Calendar },
  { label: 'Galeri Media', href: '/admin/gallery', icon: Camera },
  { label: 'Katalog Merchandise', href: '/admin/merchandise', icon: ShoppingBag },
  { label: 'Open Recruitment', href: '/admin/recruitment', icon: UserPlus },
  { label: 'Proposal Kolaborasi', href: '/admin/collaboration', icon: Handshake },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <aside className="w-64 bg-midnight-950 text-white flex flex-col justify-between border-r border-white/10 shrink-0 min-h-screen">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-white/10 flex items-center gap-3.5">
          <div className="relative h-10 w-10 shrink-0 rounded-xl bg-white/10 p-1 border border-white/15">
            <Image
              src="/logos/logo-immapa.png"
              alt="Logo IMMAPA"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-sm font-extrabold tracking-tight text-white">IMMAPA Admin</h1>
            <p className="text-[10px] text-crimson-light font-bold">Portal Pengurus</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1.5">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-crimson text-white shadow-glow-crimson'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-crimson-light'} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
        >
          <span>Lihat Website Publik</span>
          <ExternalLink size={14} />
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold text-crimson-light hover:bg-crimson/15 hover:text-white transition-colors cursor-pointer"
        >
          <LogOut size={14} />
          <span>Keluar (Logout)</span>
        </button>
      </div>
    </aside>
  );
}
