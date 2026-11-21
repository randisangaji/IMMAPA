import { dataService } from '@/services/storage';
import { ShoppingBag, Plus, Trash2 } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { formatRupiah } from '@/lib/utils';

export default async function AdminMerchandisePage() {
  const products = await dataService.getProducts();

  async function addProductAction(formData: FormData) {
    'use server';
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;
    const priceStr = formData.get('price') as string;
    const description = formData.get('description') as string;
    const sizesStr = formData.get('sizes') as string;

    if (!name || !category) return;

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const price = priceStr ? Number(priceStr) : null;
    const sizes = sizesStr
      ? sizesStr.split(',').map((s) => s.trim())
      : ['S', 'M', 'L', 'XL'];

    await dataService.addProduct({
      id: `prod-${Date.now()}`,
      name,
      slug,
      category,
      price,
      sizes,
      description: description || 'Official merchandise IMMAPA Telkom University.',
      isAvailable: true,
      images: [{ url: '/images/merchandise/jersey.jpg', isPrimary: true }],
    });

    revalidatePath('/admin/merchandise');
    revalidatePath('/merchandise');
  }

  async function deleteProductAction(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (id) {
      await dataService.deleteProduct(id);
      revalidatePath('/admin/merchandise');
      revalidatePath('/merchandise');
    }
  }

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Manajemen Merchandise</h2>
        <p className="text-xs text-gray-500 mt-1">
          Atur katalog jersey, kaos, jaket, varian ukuran, dan harga merchandise resmi.
        </p>
      </div>

      {/* Add Product Form */}
      <div className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-xs">
        <h3 className="text-base font-bold text-navy mb-4 flex items-center gap-2">
          <Plus size={18} className="text-cenderawasih-pink" />
          <span>Tambah Produk Merchandise Baru</span>
        </h3>

        <form action={addProductAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Nama Produk *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Polo Shirt IMMAPA 2025"
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
                <option value="Jersey Futsal">Jersey Futsal</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Jaket">Jaket / Hoodie</option>
                <option value="Aksesoris">Aksesoris</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Harga (Opsional / Kosongkan jika unconfirmed)
              </label>
              <input
                type="number"
                name="price"
                placeholder="e.g. 150000"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Varian Ukuran (pisahkan dengan koma)
              </label>
              <input
                type="text"
                name="sizes"
                defaultValue="S, M, L, XL, XXL"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Deskripsi Bahan & Spesifikasi
              </label>
              <input
                type="text"
                name="description"
                placeholder="Bahan katun combed 24s dengan sablon..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary py-2 px-5 text-xs"
          >
            Simpan Produk
          </button>
        </form>
      </div>

      {/* Products List */}
      <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-navy">Daftar Merchandise ({products.length})</h3>
        <div className="divide-y divide-gray-100">
          {products.map((prod) => (
            <div key={prod.id} className="py-4 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-navy text-sm">{prod.name}</span>
                  <span className="rounded-full bg-accent-blue px-2 py-0.5 text-[10px] font-bold text-navy">
                    {prod.category}
                  </span>
                </div>
                <p className="text-xs text-cenderawasih-pink font-semibold mt-1">
                  Harga: {formatRupiah(prod.price)}
                </p>
                <p className="text-[11px] text-gray-400">
                  Ukuran: {prod.sizes.join(', ')}
                </p>
              </div>

              <form action={deleteProductAction}>
                <input type="hidden" name="id" value={prod.id} />
                <button
                  type="submit"
                  className="p-2 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                  title="Hapus Produk"
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
