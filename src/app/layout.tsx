import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'IMMAPA Telkom University — Ikatan Mahasiswa Maluku, Papua & NTT',
    template: '%s | IMMAPA Telkom University'
  },
  description:
    'Website resmi Ikatan Mahasiswa Maluku, Papua & NTT (IMMAPA) Telkom University. Wadah persaudaraan, pelestarian budaya, arsip kabinet, dan dokumentasi kegiatan mahasiswa Indonesia Timur di Bandung.',
  keywords: [
    'IMMAPA',
    'IMMAPA Telkom University',
    'Mahasiswa Maluku',
    'Mahasiswa Papua',
    'Mahasiswa NTT',
    'Telkom University',
    'Organisasi Daerah Telkom University',
    'Kitorang Basodara',
    'Budaya Indonesia Timur'
  ],
  authors: [{ name: 'IMMAPA Telkom University' }],
  creator: 'IMMAPA Telkom University',
  metadataBase: new URL('https://immapa.telkomuniversity.ac.id'),
  icons: {
    icon: '/logos/logo-immapa.png',
    apple: '/logos/logo-immapa.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://immapa.telkomuniversity.ac.id',
    title: 'IMMAPA Telkom University — Kitorang Bisa Kitorang Basodara',
    description:
      'Wadah persaudaraan, pelestarian budaya, arsip kabinet, dan kegiatan resmi IMMAPA Telkom University, Bandung.',
    siteName: 'IMMAPA Telkom University',
    images: [
      {
        url: '/logos/logo-immapa.png',
        width: 800,
        height: 800,
        alt: 'Logo Resmi IMMAPA Telkom University',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white text-accent-dark antialiased">
        {children}
      </body>
    </html>
  );
}
