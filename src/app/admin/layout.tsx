import { getAdminSession } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  return (
    <div className="flex min-h-screen bg-midnight-950 text-white">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-midnight-950">
        <header className="h-16 bg-midnight-900/90 backdrop-blur-md border-b border-white/10 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-400">Mode:</span>
            <span className="rounded-full bg-crimson/20 text-crimson-light px-2.5 py-0.5 text-xs font-bold border border-crimson/30">
              Pengurus Terotorisasi
            </span>
          </div>
          <div className="text-xs text-gray-300 font-semibold">
            admin@immapa.telkomuniversity.ac.id
          </div>
        </header>
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto bg-midnight-950 text-white">
          {children}
        </main>
      </div>
    </div>
  );
}
