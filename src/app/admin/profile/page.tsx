import { dataService } from '@/services/storage';
import { Save, Building, CheckCircle2 } from 'lucide-react';

export default async function AdminProfilePage() {
  const profile = await dataService.getProfile();

  async function updateProfileForm(formData: FormData) {
    'use server';
    const name = formData.get('name') as string;
    const tagline = formData.get('tagline') as string;
    const aboutIntro = formData.get('aboutIntro') as string;
    const backgroundStory = formData.get('backgroundStory') as string;
    const vision = formData.get('vision') as string;

    await dataService.updateProfile({
      name,
      tagline,
      aboutIntro,
      backgroundStory,
      vision,
    });
  }

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Pengaturan Profil Organisasi</h2>
        <p className="text-xs text-gray-500 mt-1">
          Perbarui informasi dasar, visi misi, dan cerita pendirian yang tampil di seluruh website publik.
        </p>
      </div>

      <div className="rounded-3xl border border-gray-200/80 bg-white p-8 shadow-xs">
        <form action={updateProfileForm} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Nama Organisasi
              </label>
              <input
                type="text"
                name="name"
                defaultValue={profile.name}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-navy font-semibold focus:border-navy focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Slogan / Semboyan
              </label>
              <input
                type="text"
                name="tagline"
                defaultValue={profile.tagline}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-navy font-semibold focus:border-navy focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Deskripsi Singkat (Tentang Kami)
            </label>
            <textarea
              name="aboutIntro"
              rows={3}
              defaultValue={profile.aboutIntro}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-navy leading-relaxed focus:border-navy focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Latar Belakang Pendirian (2017)
            </label>
            <textarea
              name="backgroundStory"
              rows={4}
              defaultValue={profile.backgroundStory}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-navy leading-relaxed focus:border-navy focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Visi Organisasi
            </label>
            <textarea
              name="vision"
              rows={3}
              defaultValue={profile.vision}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-navy leading-relaxed focus:border-navy focus:bg-white focus:outline-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              className="btn-primary py-2.5 px-6 text-xs"
            >
              <Save size={16} />
              <span>Simpan Perubahan Profil</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
