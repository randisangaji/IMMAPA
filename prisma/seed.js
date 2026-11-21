/**
 * Database Seed Script for IMMAPA Telkom University
 * Seeds initial organization profile, cabinets archive (2017-2024),
 * programs, gallery, and default admin user.
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting IMMAPA Database Seeding...');

  // 1. Create Default Admin User
  const defaultAdminEmail = process.env.DEFAULT_ADMIN_EMAIL || 'admin@immapa.telkomuniversity.ac.id';
  const admin = await prisma.user.upsert({
    where: { email: defaultAdminEmail },
    update: {},
    create: {
      email: defaultAdminEmail,
      name: 'Administrator IMMAPA',
      password: process.env.DEFAULT_ADMIN_PASSWORD || 'AdminIMMAPA2026!',
      role: 'SUPER_ADMIN',
    },
  });
  console.log(`✅ Admin user seeded: ${admin.email}`);

  // 2. Create Organization Profile
  const profile = await prisma.organizationProfile.upsert({
    where: { id: 'immapa-profile-main' },
    update: {},
    create: {
      id: 'immapa-profile-main',
      name: 'IMMAPA Telkom University',
      fullName: 'Ikatan Mahasiswa Maluku, Papua & NTT Telkom University',
      tagline: 'Kitorang Bisa Kitorang Basodara',
      foundedYear: 2017,
      originLocation: 'Telkom University, Bandung, Jawa Barat',
      aboutIntro:
        'IMMAPA (Ikatan Mahasiswa Maluku, Papua & NTT) didirikan pada tahun 2017 sebagai wadah persaudaraan dan pelestarian budaya.',
      backgroundStory:
        'Berakar dari semangat kebersamaan mahasiswa rantau Indonesia Timur di Bandung.',
      vision:
        'Terwujudnya ikatan kekeluargaan mahasiswa Maluku, Papua, dan NTT yang solid dan berkarakter.',
      missions: [
        'Membangun rasa persaudaraan yang harmonis.',
        'Wadah pengembangan kapasitas akademik dan kepemimpinan.',
        'Melestarikan dan mempromosikan seni budaya nusantara.',
      ],
      values: [
        { title: 'Kekeluargaan (Basodara)', description: 'Persaudaraan tulus antar sesama rantau.', icon: 'Heart' },
        { title: 'Identitas Budaya', description: 'Pelestarian seni tari dan musik daerah.', icon: 'Compass' },
      ],
      benefits: [
        'Keluarga kedua di tanah rantau.',
        'Ruang kreasi seni dan kepemimpinan.',
      ],
      logoUrl: '/logos/logo-immapa.png',
      profileVideoUrl: 'https://www.youtube.com/embed/C7jLAdVjVRE',
    },
  });
  console.log(`✅ Organization profile seeded: ${profile.name}`);

  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
