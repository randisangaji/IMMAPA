'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Kabinet', href: '/history-cabinets' },
  { label: 'Program', href: '/programs' },
  { label: 'Galeri', href: '/gallery' },
  { label: 'Merchandise', href: '/merchandise' },
  { label: 'Kolaborasi', href: '/collaboration' },
  { label: 'Kontak & Gabung', href: '/contact-join' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100/60 py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-navy/5 p-1 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logos/logo-immapa.png"
              alt="Logo Resmi IMMAPA Telkom University"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-navy">
                IMMAPA
              </span>
              <span className="rounded-full bg-cenderawasih-pink/10 px-2 py-0.5 text-[10px] font-semibold text-cenderawasih-pink">
                Tel-U
              </span>
            </div>
            <p className="text-[11px] text-gray-500 font-medium hidden sm:block">
              Maluku, Papua & NTT
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive
                    ? 'text-navy font-semibold bg-accent-blue/50'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cenderawasih-pink" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Admin Link */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-navy font-medium px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
            title="Portal Administrator"
          >
            <ShieldCheck size={14} className="text-gray-400" />
            <span>Admin</span>
          </Link>
          <Link
            href="/contact-join"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-navy-800 hover:-translate-y-0.5"
          >
            <span>Gabung Kami</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/admin"
            className="p-2 text-gray-500 hover:text-navy"
            aria-label="Admin Portal"
          >
            <ShieldCheck size={18} />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Buka menu navigasi"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-gray-100 bg-white px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-blue/60 text-navy font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <Link
                href="/contact-join"
                className="w-full justify-center btn-primary py-3 text-sm"
              >
                Gabung Bersama IMMAPA
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
