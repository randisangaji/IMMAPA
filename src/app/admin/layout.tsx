import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  // If no session, allow login page, otherwise redirect to login
  // Note: Next.js subroute matching or checking headers
  return (
    <div className="flex min-h-screen bg-accent-gray">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-200/80 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500">Mode:</span>
            <span className="rounded-md bg-emerald-50 text-emerald-700 px-2 py-0.5 text-xs font-bold border border-emerald-200">
              Pengurus Terotorisasi
            </span>
          </div>
          <div className="text-xs text-gray-600 font-medium">
            admin@immapa.telkomuniversity.ac.id
          </div>
        </header>
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
