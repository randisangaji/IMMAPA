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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-card border-b border-soft-300 py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-soft-200 py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3.5 group cursor-pointer">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-soft-200 p-1 border border-soft-300 transition-transform duration-300 group-hover:scale-105 group-hover:border-navy/30">
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
              <span className="text-lg font-extrabold tracking-tight text-navy group-hover:text-navy-light transition-colors">
                IMMAPA
              </span>
              <span className="rounded-full bg-navy/10 border border-navy/15 px-2 py-0.5 text-[10px] font-bold text-navy">
                Tel-U
              </span>
            </div>
            <p className="text-[11px] text-soft-600 font-medium hidden sm:block">
              Maluku, Papua & NTT
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-all rounded-xl ${
                  isActive
                    ? 'text-navy font-bold bg-navy/5'
                    : 'text-soft-600 hover:text-navy hover:bg-soft-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-navy" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Admin Link */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-xs text-soft-600 hover:text-navy font-medium px-3 py-1.5 rounded-lg hover:bg-soft-200 transition-colors cursor-pointer"
            title="Portal Administrator"
          >
            <ShieldCheck size={14} className="text-navy" />
            <span>Admin</span>
          </Link>
          <Link
            href="/contact-join"
            className="btn-primary text-xs py-2.5 px-4"
          >
            <span>Gabung Kami</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/admin"
            className="p-2 text-soft-600 hover:text-navy"
            aria-label="Admin Portal"
          >
            <ShieldCheck size={18} className="text-navy" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-soft-600 hover:bg-soft-200 hover:text-navy focus:outline-none cursor-pointer"
            aria-label="Buka menu navigasi"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-soft-300 bg-white px-4 pt-3 pb-6 shadow-elevated animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-navy/5 text-navy border-l-4 border-navy'
                      : 'text-soft-600 hover:bg-soft-200 hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-soft-300">
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
