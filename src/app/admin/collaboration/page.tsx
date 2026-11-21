import { dataService } from '@/services/storage';
import { Handshake, CheckCircle2, Clock, Mail, Phone } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { formatDate } from '@/lib/utils';

export default async function AdminCollaborationPage() {
  const inquiries = await dataService.getInquiries();

  async function markReviewedAction(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    if (id) {
      await dataService.markInquiryReviewed(id);
      revalidatePath('/admin/collaboration');
      revalidatePath('/admin');
    }
  }

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Proposal Kolaborasi & Sponsorship</h2>
        <p className="text-xs text-gray-500 mt-1">
          Daftar pengajuan kemitraan, sponsorship, dan media partner yang dikirimkan melalui formulir website.
        </p>
      </div>

      <div className="space-y-4">
        {inquiries.length > 0 ? (
          inquiries.map((inq) => (
            <div
              key={inq.id}
              className={`rounded-2xl border p-6 shadow-xs transition-all ${
                inq.isReviewed
                  ? 'bg-white border-gray-100 opacity-80'
                  : 'bg-white border-cenderawasih-pink/30 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-navy">{inq.companyName}</h3>
                    <span className="rounded-full bg-accent-blue px-2.5 py-0.5 text-[10px] font-bold text-navy">
                      {inq.category}
                    </span>
                    {inq.isReviewed ? (
                      <span className="rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[10px] font-bold border border-emerald-200">
                        Sudah Ditinjau
                      </span>
                    ) : (
                      <span className="rounded-full bg-rose-50 text-rose-700 px-2 py-0.5 text-[10px] font-bold border border-rose-200 animate-pulse">
                        Baru
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Diterima pada {formatDate(inq.createdAt)}
                  </p>
                </div>

                {!inq.isReviewed && (
                  <form action={markReviewedAction}>
                    <input type="hidden" name="id" value={inq.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
                    >
                      <CheckCircle2 size={14} />
                      <span>Tandai Sudah Ditinjau</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Message */}
              <div className="pt-3 space-y-2">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Pesan & Rencana Kerjasama:
                </p>
                <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl">
                  {inq.message}
                </p>
              </div>

              {/* Contact info */}
              <div className="pt-3 flex flex-wrap gap-4 text-xs text-gray-600">
                <span>
                  <strong>PIC:</strong> {inq.contactPerson}
                </span>
                <span className="flex items-center gap-1 text-navy">
                  <Mail size={13} className="text-cenderawasih-pink" />
                  <a href={`mailto:${inq.email}`} className="hover:underline">
                    {inq.email}
                  </a>
                </span>
                {inq.phone && (
                  <span className="flex items-center gap-1 text-navy">
                    <Phone size={13} className="text-cenderawasih-gold" />
                    <a href={`tel:${inq.phone}`} className="hover:underline">
                      {inq.phone}
                    </a>
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center text-gray-400">
            <Handshake size={48} className="mx-auto text-gray-300 mb-3" />
            <p className="text-base font-semibold text-gray-600">Belum Ada Pengajuan Kolaborasi</p>
            <p className="text-xs text-gray-400 mt-1">
              Pengajuan kemitraan dari formulir website akan tampil di sini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
