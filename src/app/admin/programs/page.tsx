import { dataService } from '@/services/storage';
import { Calendar, Plus, Trash2 } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { ProgramStatus } from '@/types';

export default async function AdminProgramsPage() {
  const programs = await dataService.getPrograms();

  async function addProgramAction(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const status = formData.get('status') as ProgramStatus;
    const responsibleDivision = formData.get('responsibleDivision') as string;
    const activityDate = formData.get('activityDate') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const objective = formData.get('objective') as string;

    if (!title || !category || !responsibleDivision) return;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    await dataService.addProgram({
      id: `prog-${Date.now()}`,
      title,
      slug,
      category,
      status: status || 'UPCOMING',
      responsibleDivision,
      activityDate: activityDate || undefined,
      location: location || 'Telkom University',
      description: description || 'Kegiatan resmi IMMAPA Telkom University.',
      objective: objective || 'Membangun kebersamaan anggota.',
      coverImageUrl: '/images/programs/program-budaya.jpg',
      isFeatured: true,
    });

    revalidatePath('/admin/programs');
    revalidatePath('/programs');
  }

  async function deleteProgramAction(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (id) {
      await dataService.deleteProgram(id);
      revalidatePath('/admin/programs');
      revalidatePath('/programs');
    }
  }

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Manajemen Program Kerja</h2>
        <p className="text-xs text-gray-500 mt-1">
          Kelola program kerja kebudayaan, olahraga, aksi sosial, dan status pelaksanaannya.
        </p>
      </div>

      {/* Add Program Form */}
      <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-xs">
        <h3 className="text-base font-bold text-navy mb-4 flex items-center gap-2">
          <Plus size={18} className="text-cenderawasih-pink" />
          <span>Tambah Program Kerja Baru</span>
        </h3>

        <form action={addProgramAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Judul Program *
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g. Festival Tari Adat Cendrawaku 2025"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Kategori *
              </label>
              <select
                name="category"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              >
                <option value="Kebudayaan">Kebudayaan</option>
                <option value="Olahraga">Olahraga</option>
                <option value="Keluarga">Keluarga</option>
                <option value="Pengabdian">Pengabdian</option>
                <option value="Akademik">Akademik</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Divisi Penanggung Jawab *
              </label>
              <input
                type="text"
                name="responsibleDivision"
                required
                placeholder="e.g. Divisi Kebudayaan & Seni"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Status Pelaksanaan
              </label>
              <select
                name="status"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              >
                <option value="UPCOMING">Mendatang (Upcoming)</option>
                <option value="ONGOING">Sedang Berjalan (Ongoing)</option>
                <option value="COMPLETED">Terlaksana (Completed)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Tanggal Kegiatan
              </label>
              <input
                type="date"
                name="activityDate"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Deskripsi Lengkap *
            </label>
            <textarea
              name="description"
              rows={3}
              required
              placeholder="Jelaskan gambaran umum kegiatan..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn-primary py-2 px-5 text-xs"
          >
            Simpan Program
          </button>
        </form>
      </div>

      {/* Programs List */}
      <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-navy">Daftar Program ({programs.length})</h3>
        <div className="divide-y divide-gray-100">
          {programs.map((prog) => (
            <div key={prog.id} className="py-4 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-navy text-sm">{prog.title}</span>
                  <span className="rounded-full bg-accent-blue px-2 py-0.5 text-[10px] font-bold text-navy">
                    {prog.category}
                  </span>
                  <span className="text-[10px] text-gray-500 font-semibold">
                    [{prog.status}]
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{prog.description}</p>
                <p className="text-[11px] text-gray-400">PJ: {prog.responsibleDivision}</p>
              </div>

              <form action={deleteProgramAction}>
                <input type="hidden" name="id" value={prog.id} />
                <button
                  type="submit"
                  className="p-2 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                  title="Hapus Program"
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
