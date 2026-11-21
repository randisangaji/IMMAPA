'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle, ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login gagal.');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-4 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Kembali ke Website Publik</span>
        </Link>

        <div className="relative mx-auto h-20 w-20 rounded-2xl bg-white p-2 shadow-lg mb-4 flex items-center justify-center">
          <Image
            src="/logos/logo-immapa.png"
            alt="Logo IMMAPA"
            fill
            className="object-contain p-1"
            priority
          />
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-white">
          Portal Administrator IMMAPA
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          Sistem Pengelolaan Konten & Arsip Kepengurusan
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="rounded-3xl bg-navy border border-navy-700 p-8 shadow-2xl">
          {error && (
            <div className="mb-6 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-medium text-rose-300">
              <AlertCircle size={16} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Email Administrator
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@immapa.telkomuniversity.ac.id"
                  className="w-full rounded-xl border border-navy-700 bg-navy-900/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-cenderawasih-pink focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-navy-700 bg-navy-900/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-cenderawasih-pink focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-accent w-full py-3 text-sm"
            >
              <ShieldCheck size={16} />
              <span>{loading ? 'Memverifikasi...' : 'Masuk ke Dashboard'}</span>
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-navy-700/80 text-center">
            <p className="text-[11px] text-gray-400">
              Kredensial bawaan: <br />
              <code className="bg-navy-900 px-2 py-0.5 rounded text-cenderawasih-gold text-[10px]">
                admin@immapa.telkomuniversity.ac.id
              </code>{' '}
              / <code className="bg-navy-900 px-2 py-0.5 rounded text-cenderawasih-gold text-[10px]">AdminIMMAPA2026!</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
