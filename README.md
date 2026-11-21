# Website Resmi IMMAPA Telkom University

Website resmi **Ikatan Mahasiswa Maluku, Papua & NTT (IMMAPA) Telkom University**. Platform resmi publikasi organisasi, arsip sejarah dan kepemimpinan kabinet (2017–sekarang), dokumentasi kegiatan, katalog merchandise, formulir kolaborasi/sponsorship, serta sistem pendaftaran anggota baru.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Ready-4169E1?logo=postgresql&logoColor=white)

---

## 🎨 Identitas Visual & Warna Brand

- **Midnight Navy:** `#191F40` (Warna Utama Dominan)
- **Cenderawasih Pink:** `#D84C83` (Aksen Lambang)
- **Cenderawasih Gold:** `#DCC66B` (Aksen Kemuliaan)
- **Soft Blue:** `#E8EEF8`
- **Dark Text:** `#18213A`
- **Light Gray:** `#F7F9FC`
- **Semboyan Resmi:** *&ldquo;Kitorang Bisa Kitorang Basodara&rdquo;*

---

## 🚀 Panduan Memulai di VS Code (Windows)

### 1. Prasyarat
- **Node.js** v18+ atau v20+ (sudah terinstal v26 LTS di sistem Anda).
- **Visual Studio Code**.

### 2. Membuka Proyek
Buka terminal dan jalankan:
```bash
cd "c:\Users\ASUS\OneDrive - Telkom University\Desktop\PROJECT\immapa-official"
code .
```

### 3. Menginstal Dependensi (Bila Diperlukan)
```bash
npm install
```

### 4. Menjalankan Server Pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser ke: **[http://localhost:3000](http://localhost:3000)**

### 5. Membangun untuk Produksi (Production Build)
```bash
npm run build
npm run start
```

---

## 🛡️ Portal Administrator (Admin Dashboard)

Website ini dilengkapi dashboard admin tersendiri untuk mengelola konten tanpa mengubah kode:
- **URL Login Admin:** `http://localhost:3000/admin/login`
- **Email Default:** `admin@immapa.telkomuniversity.ac.id`
- **Password Default:** `AdminIMMAPA2026!`
*(Kredensial dapat diubah melalui file `.env.local`)*

### Fitur Dashboard Admin:
1. **Profil Organisasi:** Perbarui nama, semboyan, tentang kami, cerita 2017, dan visi-misi.
2. **Arsip Kabinet:** Tambah/hapus kabinet dari tahun 2017 hingga kepengurusan mendatang.
3. **Program Kerja:** Tambah kegiatan baru, ubah kategori, tanggal, lokasi, dan status (Upcoming, Ongoing, Completed).
4. **Galeri Media:** Tambah foto dokumentasi dan embed video YouTube.
5. **Katalog Merchandise:** Tambah produk jersey, kaos, jaket, varian ukuran, dan harga.
6. **Open Recruitment:** Atur status rekrutmen (OPEN, COMING SOON, CLOSED) serta tautan Google Form.
7. **Proposal Kolaborasi:** Meninjau pengajuan partnership dan sponsor yang masuk.

---

## 🗄️ Database (Prisma + PostgreSQL)

Skema database lengkap tersedia di `prisma/schema.prisma`.

### Menghubungkan ke PostgreSQL:
1. Siapkan database PostgreSQL (lokal atau cloud seperti Supabase, Neon, Railway).
2. Perbarui `DATABASE_URL` di `.env.local`:
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/immapa_db?schema=public"
   ```
3. Jalankan migrasi dan seeding data:
   ```bash
   npx prisma migrate dev --name init
   npm run prisma:seed
   ```

*Catatan: Website telah dirancang dengan Data Service cerdas di `src/services/storage.ts` yang tetap berfungsi penuh secara lokal meskipun database PostgreSQL belum terhubung.*

---

## 🌐 Panduan Deploy ke Vercel

1. Buat repository baru di GitHub bernama `immapa-official` (atau nama lain).
2. Push proyek ini ke GitHub:
   ```bash
   git init
   git add -A
   git commit -m "Initial commit: Official IMMAPA Telkom University Website"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. Buka [Vercel](https://vercel.com) → **Add New** → **Project** → Pilih repo GitHub Anda.
4. Tambahkan Environment Variables di Vercel:
   - `JWT_SECRET`
   - `DEFAULT_ADMIN_EMAIL`
   - `DEFAULT_ADMIN_PASSWORD`
   - `DATABASE_URL` (dari Neon / Supabase / Vercel Postgres)
5. Klik **Deploy**. Website Anda akan aktif secara global! 🎉
