import { dataService } from '@/services/storage';
import { Award, Plus, Trash2, ShieldCheck } from 'lucide-react';
import { revalidatePath } from 'next/cache';

export default async function AdminCabinetsPage() {
  const cabinets = await dataService.getCabinets();

  async function addCabinetAction(formData: FormData) {
    'use server';
    const year = Number(formData.get('year'));
    const periodName = formData.get('periodName') as string;
    const cabinetName = formData.get('cabinetName') as string;
    const chairperson = formData.get('chairperson') as string;
    const viceChairperson = formData.get('viceChairperson') as string;
    const description = formData.get('description') as string;
    const philosophy = formData.get('philosophy') as string;

    if (!year || !cabinetName || !chairperson) return;

    await dataService.addCabinet({
      id: `cab-${year}-${Date.now()}`,
      year,
      periodName: periodName || `${year}/${year + 1}`,
      cabinetName,
      chairperson,
      viceChairperson,
      description: description || 'Periode kepengurusan IMMAPA.',
      philosophy,
      cabinetLogoUrl: '/logos/logo-immapa.png',
      isActive: false,
      divisions: [],
    });

    revalidatePath('/admin/cabinets');
    revalidatePath('/history-cabinets');
  }

  async function deleteCabinetAction(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (id) {
      await dataService.deleteCabinet(id);
      revalidatePath('/admin/cabinets');
      revalidatePath('/history-cabinets');
    }
  }

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Manajemen Arsip Kabinet (2017–Sekarang)</h2>
        <p className="text-xs text-gray-500 mt-1">
          Tambah periode kabinet baru, ubah nama ketua/wakil, filosofi, dan arsip kepengurusan.
        </p>
      </div>

      {/* Add New Cabinet Form */}
      <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-xs">
        <h3 className="text-base font-bold text-navy mb-4 flex items-center gap-2">
          <Plus size={18} className="text-cenderawasih-pink" />
          <span>Tambah Periode Kabinet Baru</span>
        </h3>

        <form action={addCabinetAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Tahun Mulai (e.g. 2025) *
              </label>
              <input
                type="number"
                name="year"
                required
                min={2017}
                max={2035}
                defaultValue={2025}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Nama Periode (e.g. 2025/2026)
              </label>
              <input
                type="text"
                name="periodName"
                placeholder="2025 / 2026"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Nama Kabinet *
              </label>
              <input
                type="text"
                name="cabinetName"
                required
                placeholder="e.g. Kabinet Nusantara Bersatu"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Nama Ketua Umum *
              </label>
              <input
                type="text"
                name="chairperson"
                required
                placeholder="Nama lengkap ketua terpilih"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Nama Wakil Ketua
              </label>
              <input
                type="text"
                name="viceChairperson"
                placeholder="Nama lengkap wakil ketua"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Filosofi & Deskripsi Singkat
            </label>
            <textarea
              name="description"
              rows={2}
              placeholder="Fokus kepengurusan kabinet..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn-primary py-2 px-5 text-xs"
          >
            Simpan Kabinet
          </button>
        </form>
      </div>

      {/* Cabinets List */}
      <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-navy">Daftar Arsip Kabinet ({cabinets.length})</h3>
        <div className="divide-y divide-gray-100">
          {cabinets.map((cab) => (
            <div key={cab.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-navy text-sm">Tahun {cab.year}</span>
                  <span className="text-xs text-cenderawasih-pink font-semibold">({cab.periodName})</span>
                  {cab.isActive && (
                    <span className="rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-bold">
                      Aktif
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold text-navy mt-0.5">{cab.cabinetName}</p>
                <p className="text-xs text-gray-500">
                  Ketua: {cab.chairperson} {cab.viceChairperson ? `· Wakil: ${cab.viceChairperson}` : ''}
                </p>
              </div>

              <form action={deleteCabinetAction}>
                <input type="hidden" name="id" value={cab.id} />
                <button
                  type="submit"
                  className="p-2 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                  title="Hapus Arsip"
                >
                  <Trash2 size={16} />
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
