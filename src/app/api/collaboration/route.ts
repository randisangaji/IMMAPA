import { NextResponse } from 'next/server';
import { dataService } from '@/services/storage';
import { PartnershipCategory } from '@/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, contactPerson, email, phone, category, message } = body;

    if (!companyName || !contactPerson || !email || !message) {
      return NextResponse.json(
        { error: 'Mohon lengkapi semua bidang yang wajib diisi.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format alamat email tidak valid.' },
        { status: 400 }
      );
    }

    const savedInquiry = await dataService.addInquiry({
      companyName: String(companyName).trim(),
      contactPerson: String(contactPerson).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : undefined,
      category: (category as PartnershipCategory) || 'EVENT_PARTNER',
      message: String(message).trim(),
    });

    return NextResponse.json(
      { success: true, inquiryId: savedInquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Collaboration submit error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses data pengajuan.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const inquiries = await dataService.getInquiries();
  return NextResponse.json(inquiries);
}
