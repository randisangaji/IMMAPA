import { dataService } from '@/services/storage';
import { UserPlus, Save, CheckCircle2 } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { RecruitmentStatus } from '@/types';

export default async function AdminRecruitmentPage() {
  const recruitment = await dataService.getRecruitment();

  async function updateRecruitmentAction(formData: FormData) {
    'use server';
    const status = formData.get('status') as RecruitmentStatus;
    const period = formData.get('period') as string;
    const announcement = formData.get('announcement') as string;
    const registrationUrl = formData.get('registrationUrl') as string;
    const contactPerson = formData.get('contactPerson') as string;

    await dataService.updateRecruitment({
      status,
      period,
      announcement,
      registrationUrl,
      contactPerson,
    });

    revalidatePath('/admin/recruitment');
    revalidatePath('/contact-join');
    revalidatePath('/');
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Manajemen Open Recruitment</h2>
        <p className="text-xs text-gray-500 mt-1">
          Ubah status pendaftaran anggota baru (Buka / Coming Soon / Tutup) dan link formulir pendaftaran.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-xs">
        <form action={updateRecruitmentAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Status Pendaftaran *
              </label>
              <select
                name="status"
                defaultValue={recruitment.status}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-navy font-bold focus:border-navy focus:bg-white focus:outline-none"
              >
                <option value="COMING_SOON">Coming Soon (Segera Dibuka)</option>
                <option value="OPEN">Open (Pendaftaran Sedang Dibuka)</option>
                <option value="CLOSED">Closed (Pendaftaran Ditutup)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Periode Pendaftaran
              </label>
              <input
                type="text"
                name="period"
                defaultValue={recruitment.period || 'Tahun Akademik 2025/2026'}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-navy font-medium focus:border-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Link Formulir Pendaftaran (Google Form / Form Eksternal)
            </label>
            <input
              type="url"
              name="registrationUrl"
              defaultValue={recruitment.registrationUrl || ''}
              placeholder="https://forms.gle/..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-navy focus:border-navy focus:bg-white focus:outline-none"
            />
            <p className="text-[11px] text-gray-400 mt-1">
              Tombol formulir pada website publik akan aktif otomatis jika status diatur ke &apos;OPEN&apos;.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Teks Pengumuman Pendaftaran
            </label>
            <textarea
              name="announcement"
              rows={4}
              defaultValue={recruitment.announcement}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-navy leading-relaxed focus:border-navy focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Narahubung / Contact Person
            </label>
            <input
              type="text"
              name="contactPerson"
              defaultValue={recruitment.contactPerson || ''}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-navy focus:border-navy focus:bg-white focus:outline-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              className="btn-primary py-2.5 px-6 text-xs"
            >
              <Save size={16} />
              <span>Perbarui Pengaturan Rekrutmen</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
