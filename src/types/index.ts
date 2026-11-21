export type RecruitmentStatus = 'OPEN' | 'COMING_SOON' | 'CLOSED';
export type ProgramStatus = 'UPCOMING' | 'ONGOING' | 'COMPLETED';
export type PartnershipCategory = 
  | 'EVENT_PARTNER' 
  | 'MEDIA_PARTNER' 
  | 'SPONSORSHIP' 
  | 'COMMUNITY_COLLABORATION' 
  | 'CULTURAL_COLLABORATION';

export interface OrgProfile {
  name: string;
  fullName: string;
  tagline: string;
  foundedYear: number;
  originLocation: string;
  aboutIntro: string;
  backgroundStory: string;
  vision: string;
  missions: string[];
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
  logoUrl: string;
  profileVideoUrl?: string;
}

export interface CabinetMember {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
  divisionName?: string;
}

export interface CabinetDivision {
  name: string;
  description?: string;
  members: CabinetMember[];
}

export interface Cabinet {
  id: string;
  year: number;
  periodName: string;
  cabinetName: string;
  cabinetLogoUrl?: string;
  philosophy?: string;
  logoMeaning?: string;
  chairperson: string;
  viceChairperson?: string;
  description: string;
  isActive: boolean;
  divisions: CabinetDivision[];
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  objective: string;
  responsibleDivision: string;
  activityDate?: string;
  location?: string;
  coverImageUrl: string;
  status: ProgramStatus;
  isFeatured: boolean;
  media?: {
    type: 'IMAGE' | 'VIDEO';
    url: string;
    caption?: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  year: number;
  type: 'IMAGE' | 'VIDEO';
  url: string;
  thumbnail?: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price?: number | null;
  sizes: string[];
  isAvailable: boolean;
  images: {
    url: string;
    isPrimary?: boolean;
  }[];
}

export interface RecruitmentInfo {
  status: RecruitmentStatus;
  period?: string;
  announcement: string;
  requirements: string[];
  timeline: {
    stage: string;
    date: string;
  }[];
  registrationUrl?: string;
  contactPerson?: string;
}

export interface PartnershipInquiry {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone?: string;
  category: PartnershipCategory;
  message: string;
  isReviewed: boolean;
  createdAt: string;
}

export interface ContactInfo {
  email: string;
  whatsapp?: string;
  instagram: string;
  tiktok?: string;
  youtube?: string;
  guidebookFileUrl?: string;
}
