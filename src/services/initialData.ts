import { OrgProfile, Cabinet, Program, GalleryItem, Product, RecruitmentInfo, ContactInfo } from '@/types';

export const initialProfile: OrgProfile = {
  name: "IMMAPA Telkom University",
  fullName: "Ikatan Mahasiswa Maluku, Papua & NTT Telkom University",
  tagline: "Kitorang Bisa Kitorang Basodara",
  foundedYear: 2017,
  originLocation: "Telkom University, Bandung, Jawa Barat",
  aboutIntro:
    "IMMAPA (Ikatan Mahasiswa Maluku, Papua & NTT) didirikan pada tahun 2017 sebagai wadah persaudaraan, pengembangan potensi, dan pelestarian nilai-nilai luhur budaya mahasiswa asal Indonesia Timur di lingkungan Telkom University.",
  backgroundStory:
    "Berakar dari semangat kebersamaan mahasiswa perantau asal Maluku, Papua, dan Nusa Tenggara Timur di Bandung, IMMAPA lahir untuk menjadi rumah kedua yang hangat, mempererat tali silaturahmi antar-daerah, serta memberikan kontribusi nyata bagi almamater dan masyarakat.",
  vision:
    "Terwujudnya ikatan kekeluargaan mahasiswa Maluku, Papua, dan NTT yang solid, berkarakter, berdaya saing global, serta aktif melestarikan kearifan budaya nusantara di Telkom University.",
  missions: [
    "Membangun dan memelihara rasa persaudaraan serta kekeluargaan yang harmonis di antara mahasiswa Indonesia Timur.",
    "Menjadi wadah pengembangan kapasitas akademik, kepemimpinan, dan soft-skills bagi seluruh anggota.",
    "Memperkenalkan, merawat, dan mempromosikan kekayaan seni dan budaya Maluku, Papua, dan NTT kepada masyarakat luas.",
    "Mengembangkan jejaring kolaborasi positif dengan civitas akademika Telkom University, organisasi kedaerahan lain, dan mitra eksternal.",
    "Melaksanakan aksi pengabdian masyarakat sebagai wujud kepedulian sosial terhadap daerah dan bangsa."
  ],
  values: [
    {
      title: "Kekeluargaan (Basodara)",
      description: "Menjunjung tinggi persaudaraan tulus tanpa memandang sekat suku atau latar belakang.",
      icon: "Heart"
    },
    {
      title: "Identitas Budaya",
      description: "Bangga melestarikan dan menampilkan kekayaan tradisi, seni, serta kearifan lokal Indonesia Timur.",
      icon: "Compass"
    },
    {
      title: "Integritas & Karakter",
      description: "Menanamkan kedisiplinan, kejujuran, dan rasa tanggung jawab dalam berorganisasi dan berkarya.",
      icon: "Shield"
    },
    {
      title: "Kolaborasi & Pertumbuhan",
      description: "Terus berkembang bersama melalui pertukaran gagasan, kerja tim, dan kontribusi nyata.",
      icon: "Users"
    }
  ],
  benefits: [
    "Keluarga kedua yang saling mendukung dan merangkul di tanah rantau.",
    "Ruang eksplorasi dan pengembangan jiwa kepemimpinan serta manajemen organisasi.",
    "Panggung kreasi seni budaya (tari, musik etnik, dan festival nusantara).",
    "Jejaring relasi mahasiswa lintas program studi dan alumni Telkom University.",
    "Kegiatan olahraga bersama (futsal, badminton, dan kebugaran jasmani).",
    "Pengalaman berharga dalam mengelola acara tingkat universitas hingga regional."
  ],
  logoUrl: "/logos/logo-immapa.png",
  profileVideoUrl: "https://www.youtube.com/embed/C7jLAdVjVRE"
};

export const initialCabinets: Cabinet[] = [
  {
    id: "cab-2024",
    year: 2024,
    periodName: "2024 / 2025",
    cabinetName: "Kabinet Cenderawasih Berjaya",
    cabinetLogoUrl: "/logos/logo-immapa.png",
    philosophy: "Filosofi Cenderawasih melambangkan keindahan yang anggun, ketangguhan dalam terbang mengarungi tantangan, serta semangat kejayaan bersama bagi mahasiswa Maluku, Papua, dan NTT.",
    logoMeaning: "Burung Cenderawasih emas melambangkan kemuliaan dan harapan masa depan; lingkaran biru tua melambangkan samudra luas yang menyatukan kepulauan timur Indonesia.",
    chairperson: "[Nama Ketua Terpilih - Menunggu Verifikasi Admin]",
    viceChairperson: "[Nama Wakil Ketua - Menunggu Verifikasi Admin]",
    description: "Kabinet aktif kepengurusan tahun 2024/2025 yang berfokus pada penguatan kapasitas internal anggota, digitalisasi arsip organisasi, dan kolaborasi festival budaya lintas kampus.",
    isActive: true,
    divisions: [
      {
        name: "Badan Pengurus Harian (BPH)",
        description: "Mengkoordinasikan arah strategis, administrasi, dan keuangan organisasi.",
        members: [
          { id: "m-1", name: "[Nama Ketua]", role: "Ketua Umum" },
          { id: "m-2", name: "[Nama Wakil]", role: "Wakil Ketua" },
          { id: "m-3", name: "[Nama Sekretaris]", role: "Sekretaris Umum" },
          { id: "m-4", name: "[Nama Bendahara]", role: "Bendahara Umum" }
        ]
      },
      {
        name: "Divisi Kebudayaan & Seni",
        description: "Bertanggung jawab atas latihan rutin tari daerah, musik tradisional, dan pertunjukan.",
        members: [
          { id: "m-5", name: "[Koordinator Seni]", role: "Koordinator Divisi" }
        ]
      },
      {
        name: "Divisi Olahraga & Kebugaran",
        description: "Menyelenggarakan IMMAPA Fun Sport, turnamen futsal, dan aktivitas fisik.",
        members: [
          { id: "m-6", name: "[Koordinator Olahraga]", role: "Koordinator Divisi" }
        ]
      },
      {
        name: "Divisi Hubungan Masyarakat & Media",
        description: "Mengelola komunikasi eksternal, media sosial (@immapa_tu), dan publikasi.",
        members: [
          { id: "m-7", name: "[Koordinator Humas]", role: "Koordinator Divisi" }
        ]
      },
      {
        name: "Divisi Pengabdian & Sosial",
        description: "Menginisiasi bakti sosial, kepedulian kemanusiaan, dan bimbingan anggota.",
        members: [
          { id: "m-8", name: "[Koordinator Sosial]", role: "Koordinator Divisi" }
        ]
      }
    ]
  },
  {
    id: "cab-2023",
    year: 2023,
    periodName: "2023 / 2024",
    cabinetName: "Kabinet Satya Basodara",
    cabinetLogoUrl: "/logos/logo-immapa.png",
    philosophy: "Satya Basodara mencerminkan kesetiaan pada janji persaudaraan dan gotong royong dalam menyatukan langkah.",
    chairperson: "[Arsip Ketua 2023 - Menunggu Verifikasi]",
    viceChairperson: "[Arsip Wakil 2023 - Menunggu Verifikasi]",
    description: "Kepengurusan periode 2023/2024 yang sukses menyelenggarakan Malam Keakraban Terbuka dan pemulihan kegiatan luring pasca-pandemi.",
    isActive: false,
    divisions: [
      {
        name: "Pengurus Inti",
        members: [{ id: "m-23-1", name: "[Pengurus Periode 2023]", role: "BPH" }]
      }
    ]
  },
  {
    id: "cab-2022",
    year: 2022,
    periodName: "2022 / 2023",
    cabinetName: "Kabinet Harmoni Timur",
    cabinetLogoUrl: "/logos/logo-immapa.png",
    philosophy: "Harmoni dari keberagaman melodi dan budaya Maluku, Papua, serta NTT.",
    chairperson: "[Arsip Ketua 2022 - Menunggu Verifikasi]",
    description: "Kepengurusan periode 2022/2023 dengan fokus pada rekonsolidasi anggota dan pertunjukan seni budaya kampus.",
    isActive: false,
    divisions: []
  },
  {
    id: "cab-2021",
    year: 2021,
    periodName: "2021 / 2022",
    cabinetName: "Kabinet Kitorang Satu",
    cabinetLogoUrl: "/logos/logo-immapa.png",
    philosophy: "Meskipun terpisah jarak saat masa transisi, kitorang tetap satu rasa satu jiwa.",
    chairperson: "[Arsip Ketua 2021 - Menunggu Verifikasi]",
    description: "Kepengurusan periode 2021/2022 dengan fokus pada webinar kepemimpinan dan forum daring mahasiswa Indonesia Timur.",
    isActive: false,
    divisions: []
  },
  {
    id: "cab-2020",
    year: 2020,
    periodName: "2020 / 2021",
    cabinetName: "Kabinet Solidaritas Timur",
    cabinetLogoUrl: "/logos/logo-immapa.png",
    philosophy: "Keteguhan solidaritas dalam menghadapi tantangan bersama.",
    chairperson: "[Arsip Ketua 2020 - Menunggu Verifikasi]",
    description: "Kepengurusan periode 2020/2021 yang menginisiasi gerakan bantuan solidaritas sosial mahasiswa rantau.",
    isActive: false,
    divisions: []
  },
  {
    id: "cab-2019",
    year: 2019,
    periodName: "2019 / 2020",
    cabinetName: "Kabinet Pesona Timur",
    cabinetLogoUrl: "/logos/logo-immapa.png",
    philosophy: "Membawa pesona dan kehangatan budaya timur ke panggung Telkom University.",
    chairperson: "[Arsip Ketua 2019 - Menunggu Verifikasi]",
    description: "Kepengurusan periode 2019/2020 yang berpartisipasi aktif dalam pagelaran seni tahunan universitas.",
    isActive: false,
    divisions: []
  },
  {
    id: "cab-2018",
    year: 2018,
    periodName: "2018 / 2019",
    cabinetName: "Kabinet Langkah Awal",
    cabinetLogoUrl: "/logos/logo-immapa.png",
    philosophy: "Memantapkan fondasi organisasi pasca-pendirian resmi.",
    chairperson: "[Arsip Ketua 2018 - Menunggu Verifikasi]",
    description: "Kepengurusan periode 2018/2019 yang merumuskan AD/ART dasar dan pembentukan divisi kerja.",
    isActive: false,
    divisions: []
  },
  {
    id: "cab-2017",
    year: 2017,
    periodName: "2017 / 2018",
    cabinetName: "Kabinet Perintis IMMAPA (2017)",
    cabinetLogoUrl: "/logos/logo-immapa.png",
    philosophy: "Awal mula berdirinya rumah bersama mahasiswa Maluku, Papua, dan NTT di Telkom University.",
    chairperson: "[Inisiator / Ketua Pendiri 2017 - Menunggu Verifikasi]",
    description: "Periode perintis yang melahirkan nama, lambang Cenderawasih resmi, dan nilai persaudaraan Kitorang Basodara.",
    isActive: false,
    divisions: []
  }
];

export const initialPrograms: Program[] = [
  {
    id: "prog-1",
    title: "Cendrawaku — Gelar Budaya Indonesia Timur",
    slug: "cendrawaku-gelar-budaya",
    category: "Kebudayaan",
    description: "Festival seni tahunan kebanggaan IMMAPA yang menampilkan ragam tarian adat, busana daerah, lantunan lagu etnik, dan pameran kuliner khas Maluku, Papua, dan NTT di hadapan civitas akademika Telkom University.",
    objective: "Mengenalkan keindahan tradisi Indonesia Timur dan melestarikan warisan leluhur di tanah perantauan.",
    responsibleDivision: "Divisi Kebudayaan & Seni",
    activityDate: "2024-11-15",
    location: "Gedung Serba Guna (GSG) Telkom University, Bandung",
    coverImageUrl: "/images/programs/program-budaya.jpg",
    status: "COMPLETED",
    isFeatured: true
  },
  {
    id: "prog-2",
    title: "IMMAPA Fun Sport & Futsal Basodara",
    slug: "immapa-fun-sport",
    category: "Olahraga",
    description: "Kegiatan olahraga rutin mingguan yang mempertemukan anggota dan alumni dalam pertandingan persahabatan futsal dan badminton untuk menjaga kebugaran jasmani dan mempererat tali silaturahmi.",
    objective: "Membangun sportivitas, kekompakan, dan menjaga kesehatan seluruh anggota IMMAPA.",
    responsibleDivision: "Divisi Olahraga & Kebugaran",
    activityDate: "2025-01-18",
    location: "Telkom University Sports Complex",
    coverImageUrl: "/images/programs/program-olahraga.jpg",
    status: "ONGOING",
    isFeatured: true
  },
  {
    id: "prog-3",
    title: "Torang Bagoyang & Malam Keakraban (Makrab)",
    slug: "torang-bagoyang-makrab",
    category: "Keluarga",
    description: "Malam sambut mahasiswa baru dan keakraban keluarga besar IMMAPA dengan api unggun, pentas kreativitas angkatan, dan tarian Poco-Poco serta Yospan bersama.",
    objective: "Menyambut anggota baru agar merasa memiliki rumah yang aman dan penuh kehangatan sejak hari pertama kuliah.",
    responsibleDivision: "Badan Pengurus Harian (BPH)",
    activityDate: "2024-10-05",
    location: "Lembang, Bandung Barat",
    coverImageUrl: "/images/programs/program-makrab.jpg",
    status: "COMPLETED",
    isFeatured: true
  },
  {
    id: "prog-4",
    title: "Bakti Sosial & Peduli Sesama Basodara",
    slug: "bakti-sosial-peduli-sesama",
    category: "Pengabdian",
    description: "Aksi kemanusiaan berupa penyaluran santunan, kunjungan ke panti asuhan, dan bantuan sosial peduli bencana oleh sukarelawan IMMAPA.",
    objective: "Mewujudkan rasa kepedulian dan tanggung jawab moral mahasiswa terhadap masyarakat sekitar.",
    responsibleDivision: "Divisi Pengabdian & Sosial",
    activityDate: "2025-04-20",
    location: "Bandung Raya & Kolaborasi Mitra",
    coverImageUrl: "/images/programs/program-sosial.jpg",
    status: "UPCOMING",
    isFeatured: false
  },
  {
    id: "prog-5",
    title: "Study Club & Mentoring Akademik",
    slug: "study-club-mentoring",
    category: "Akademik",
    description: "Sesi bimbingan belajar dan berbagi pengalaman akademik dari senior kepada mahasiswa tingkat awal untuk saling mendukung capaian perkuliahan.",
    objective: "Meningkatkan prestasi belajar dan ketahanan akademik mahasiswa Indonesia Timur di Telkom University.",
    responsibleDivision: "Divisi Akademik & Pengembangan SDM",
    activityDate: "2025-03-10",
    location: "Open Library Telkom University",
    coverImageUrl: "/images/programs/program-akademik.jpg",
    status: "UPCOMING",
    isFeatured: false
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Penampilan Tarian Tradisional di Pagelaran Budaya",
    category: "Kebudayaan",
    year: 2024,
    type: "IMAGE",
    url: "/images/gallery/gallery-1.jpg",
    description: "Mahasiswa IMMAPA menampilkan gerak tari dinamis khas Papua dan Maluku."
  },
  {
    id: "gal-2",
    title: "Kumpul Keluarga Besar & Foto Bersama",
    category: "Keluarga",
    year: 2024,
    type: "IMAGE",
    url: "/images/gallery/gallery-2.jpg",
    description: "Keluarga besar IMMAPA Telkom University dalam balutan busana adat daerah."
  },
  {
    id: "gal-3",
    title: "IMMAPA Fun Sport di Lapangan Futsal",
    category: "Olahraga",
    year: 2024,
    type: "IMAGE",
    url: "/images/gallery/gallery-3.jpg",
    description: "Semangat kekompakan dalam pertandingan futsal persahabatan antar-wilayah."
  },
  {
    id: "gal-4",
    title: "Aksi Baksos & Kunjungan Kasih",
    category: "Pengabdian",
    year: 2023,
    type: "IMAGE",
    url: "/images/gallery/gallery-4.jpg",
    description: "Penyaluran sembako dan kebahagiaan bersama anak-anak panti asuhan di Bandung."
  },
  {
    id: "gal-5",
    title: "Video Profil & Perjalanan IMMAPA",
    category: "Kebudayaan",
    year: 2024,
    type: "VIDEO",
    url: "https://www.youtube.com/embed/C7jLAdVjVRE",
    thumbnail: "/images/gallery/video-thumb.jpg",
    description: "Tayangan rangkuman semangat, tarian, dan kebersamaan keluarga IMMAPA Telkom University."
  }
];

export const initialProducts: Product[] = [
  {
    id: "prod-1",
    name: "Jersey Futsal Official IMMAPA 2024",
    slug: "jersey-futsal-immapa-2024",
    category: "Jersey Futsal",
    description: "Jersey futsal edisi resmi IMMAPA dengan motif etnik Cenderawasih modern, bahan dri-fit berpori adem, dan jahitan kualitas premium.",
    price: null, // Menunggu konfirmasi pengurus
    sizes: ["S", "M", "L", "XL", "XXL"],
    isAvailable: true,
    images: [{ url: "/images/merchandise/jersey.jpg", isPrimary: true }]
  },
  {
    id: "prod-2",
    name: "T-Shirt Etnik 'Kitorang Basodara'",
    slug: "tshirt-kitorang-basodara",
    category: "T-Shirt",
    description: "Kaos kasual katun combed 24s lembut dengan sablon tipografi khas 'Kitorang Bisa Kitorang Basodara' serta siluet Burung Cenderawasih di dada.",
    price: null,
    sizes: ["S", "M", "L", "XL"],
    isAvailable: true,
    images: [{ url: "/images/merchandise/tshirt.jpg", isPrimary: true }]
  },
  {
    id: "prod-3",
    name: "Varsity / Hoodie Hangat IMMAPA",
    slug: "varsity-hoodie-immapa",
    category: "Jaket",
    description: "Jaket fleece tebal dengan bordir logo IMMAPA di dada kiri dan patch kepulauan Indonesia Timur di lengan.",
    price: null,
    sizes: ["M", "L", "XL", "XXL"],
    isAvailable: true,
    images: [{ url: "/images/merchandise/hoodie.jpg", isPrimary: true }]
  },
  {
    id: "prod-4",
    name: "Lanyard & Keychain Etnik IMMAPA",
    slug: "lanyard-keychain-etnik",
    category: "Aksesoris",
    description: "Tali gantungan ID card bermotif tenun NTT & ukiran Papua, dilengkapi gantungan kunci akrilik logo IMMAPA.",
    price: null,
    sizes: ["All Size"],
    isAvailable: true,
    images: [{ url: "/images/merchandise/lanyard.jpg", isPrimary: true }]
  }
];

export const initialRecruitment: RecruitmentInfo = {
  status: "COMING_SOON",
  period: "Tahun Akademik 2025/2026",
  announcement:
    "Open Recruitment pengurus dan anggota baru IMMAPA Telkom University akan segera dibuka. Pantau terus akun Instagram resmi @immapa_tu dan halaman website ini untuk jadwal pendaftaran resmi!",
  requirements: [
    "Mahasiswa aktif Telkom University dari seluruh angkatan dan program studi.",
    "Berasal dari wilayah Maluku, Papua, atau Nusa Tenggara Timur — ATAU memiliki kecintaan dan kepedulian tinggi terhadap seni budaya Indonesia Timur.",
    "Memiliki komitmen, integritas, dan semangat kebersamaan dalam berorganisasi.",
    "Siap berkontribusi aktif dalam kegiatan dan program kerja IMMAPA."
  ],
  timeline: [
    { stage: "Sosialisasi & Pendaftaran Online", date: "Segera Diumumkan" },
    { stage: "Wawancara & Forum Keakraban", date: "Segera Diumumkan" },
    { stage: "Pengumuman & Welcoming Gathering", date: "Segera Diumumkan" }
  ],
  registrationUrl: "",
  contactPerson: "Narahubung IMMAPA: Instagram @immapa_tu"
};

export const initialContact: ContactInfo = {
  email: "immapa@telkomuniversity.ac.id",
  whatsapp: "", // Placeholder sampai kontak diverifikasi
  instagram: "https://www.instagram.com/immapa_tu/",
  tiktok: "",
  youtube: "https://www.youtube.com/@immapatelkomuniversity",
  guidebookFileUrl: ""
};
