'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PartnershipCategory } from '@/types';

export default function CollaborationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    category: 'EVENT_PARTNER' as PartnershipCategory,
    message: '',
  });

  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');

    try {
      const res = await fetch('/api/collaboration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Gagal mengirim pengajuan.');
      }

      setStatus('SUCCESS');
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        category: 'EVENT_PARTNER',
        message: '',
      });
    } catch (err: unknown) {
      setStatus('ERROR');
      setErrorMessage(err instanceof Error ? err.message : 'Terjadi kesalahan sistem.');
    }
  };

  return (
    <div className="rounded-2xl border border-soft-300 bg-white p-8 sm:p-10 shadow-elevated">
      <h3 className="text-2xl font-extrabold text-navy mb-2">Formulir Kemitraan & Kolaborasi</h3>
      <p className="text-sm text-soft-500 mb-6 leading-relaxed">
        Silakan lengkapi formulir berikut. Tim humas dan kemitraan IMMAPA akan menghubungi Anda dalam waktu 1x24 jam kerja.
      </p>

      {status === 'SUCCESS' ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-3">
          <CheckCircle2 size={40} className="mx-auto text-emerald-500" />
          <h4 className="text-lg font-bold text-navy">Pengajuan Berhasil Dikirim!</h4>
          <p className="text-sm text-soft-600">
            Terima kasih atas minat Anda untuk berkolaborasi dengan IMMAPA Telkom University. Tim kami akan segera meninjau proposal Anda.
          </p>
          <button
            onClick={() => setStatus('IDLE')}
            className="mt-3 text-xs font-bold text-navy underline hover:no-underline cursor-pointer"
          >
            Kirim pengajuan lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'ERROR' && (
            <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs font-semibold text-rose-700">
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-soft-600 mb-1.5">
                Nama Perusahaan / Organisasi *
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Contoh: PT Kreasi Nusantara / BEM FEB"
                className="w-full rounded-xl border border-soft-300 bg-soft-100 px-4 py-2.5 text-sm text-navy placeholder:text-soft-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-soft-600 mb-1.5">
                Nama Narahubung / PIC *
              </label>
              <input
                type="text"
                required
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                placeholder="Nama lengkap PIC"
                className="w-full rounded-xl border border-soft-300 bg-soft-100 px-4 py-2.5 text-sm text-navy placeholder:text-soft-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-soft-600 mb-1.5">
                Email Resmi *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="nama@instansi.com"
                className="w-full rounded-xl border border-soft-300 bg-soft-100 px-4 py-2.5 text-sm text-navy placeholder:text-soft-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-soft-600 mb-1.5">
                Nomor WhatsApp / Telepon (Opsional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="081234567890"
                className="w-full rounded-xl border border-soft-300 bg-soft-100 px-4 py-2.5 text-sm text-navy placeholder:text-soft-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-soft-600 mb-1.5">
              Kategori Kolaborasi *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as PartnershipCategory })}
              className="w-full rounded-xl border border-soft-300 bg-soft-100 px-4 py-2.5 text-sm text-navy focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/20"
            >
              <option value="EVENT_PARTNER">Event Partnership (Kerjasama Acara)</option>
              <option value="MEDIA_PARTNER">Media Partner (Publikasi & Liputan)</option>
              <option value="SPONSORSHIP">Sponsorship (Dukungan Pendanaan/Produk)</option>
              <option value="COMMUNITY_COLLABORATION">Community Collaboration (Kolaborasi Komunitas)</option>
              <option value="CULTURAL_COLLABORATION">Cultural Collaboration (Pentas Seni & Budaya)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-soft-600 mb-1.5">
              Pesan & Deskripsi Singkat Penawaran *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ceritakan rencana acara, bentuk kolaborasi yang diharapkan, dan jadwal pelaksanaan..."
              className="w-full rounded-xl border border-soft-300 bg-soft-100 px-4 py-2.5 text-sm text-navy placeholder:text-soft-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy/20"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'LOADING'}
              className="btn-primary w-full py-3.5"
            >
              <Send size={16} />
              <span>{status === 'LOADING' ? 'Mengirim Proposal...' : 'Kirim Pengajuan Kolaborasi'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
