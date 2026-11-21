import { dataService } from '@/services/storage';
import { Camera, Plus, Trash2, Video } from 'lucide-react';
import { revalidatePath } from 'next/cache';

export default async function AdminGalleryPage() {
  const items = await dataService.getGallery();

  async function addGalleryAction(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const year = Number(formData.get('year'));
    const type = formData.get('type') as 'IMAGE' | 'VIDEO';
    const url = formData.get('url') as string;
    const description = formData.get('description') as string;

    if (!title || !category || !year) return;

    await dataService.addGalleryItem({
      id: `gal-${Date.now()}`,
      title,
      category,
      year: year || 2024,
      type: type || 'IMAGE',
      url: url || (type === 'VIDEO' ? 'https://www.youtube.com/embed/C7jLAdVjVRE' : '/images/gallery/gallery-1.jpg'),
      description,
    });

    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
  }

  async function deleteGalleryAction(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (id) {
      await dataService.deleteGalleryItem(id);
      revalidatePath('/admin/gallery');
      revalidatePath('/gallery');
    }
  }

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Manajemen Galeri Media</h2>
        <p className="text-xs text-gray-500 mt-1">
          Tambahkan foto dokumentasi kegiatan atau tautan video YouTube resmi IMMAPA.
        </p>
      </div>

      {/* Add Media Form */}
      <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-xs">
        <h3 className="text-base font-bold text-navy mb-4 flex items-center gap-2">
          <Plus size={18} className="text-cenderawasih-pink" />
          <span>Tambah Media Galeri Baru</span>
        </h3>

        <form action={addGalleryAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Judul Foto / Video *
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g. Malam Keakraban Angkatan 2024"
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
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Tahun Dokumentasi *
              </label>
              <input
                type="number"
                name="year"
                required
                min={2017}
                max={2030}
                defaultValue={2024}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Tipe Media
              </label>
              <select
                name="type"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              >
                <option value="IMAGE">Foto Dokumentasi</option>
                <option value="VIDEO">Video YouTube (Embed Link)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                URL / Path Media (Opsional)
              </label>
              <input
                type="text"
                name="url"
                placeholder="https://www.youtube.com/embed/... atau /images/gallery/..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Keterangan / Caption
            </label>
            <input
              type="text"
              name="description"
              placeholder="Deskripsi singkat momen..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn-primary py-2 px-5 text-xs"
          >
            Simpan Media
          </button>
        </form>
      </div>

      {/* Gallery List */}
      <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-navy">Daftar Dokumentasi ({items.length})</h3>
        <div className="divide-y divide-gray-100">
          {items.map((item) => (
            <div key={item.id} className="py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue text-navy">
                  {item.type === 'VIDEO' ? <Video size={18} /> : <Camera size={18} />}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    Tahun {item.year} · {item.category} · {item.type}
                  </p>
                </div>
              </div>

              <form action={deleteGalleryAction}>
                <input type="hidden" name="id" value={item.id} />
                <button
                  type="submit"
                  className="p-2 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                  title="Hapus Media"
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
