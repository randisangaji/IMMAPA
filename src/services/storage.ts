import {
  OrgProfile,
  Cabinet,
  Program,
  GalleryItem,
  Product,
  RecruitmentInfo,
  ContactInfo,
  PartnershipInquiry
} from '@/types';
import {
  initialProfile,
  initialCabinets,
  initialPrograms,
  initialGallery,
  initialProducts,
  initialRecruitment,
  initialContact
} from './initialData';

// In-memory runtime store for stateful operations in server process
let profileData: OrgProfile = { ...initialProfile };
let cabinetsData: Cabinet[] = [...initialCabinets];
let programsData: Program[] = [...initialPrograms];
let galleryData: GalleryItem[] = [...initialGallery];
let productsData: Product[] = [...initialProducts];
let recruitmentData: RecruitmentInfo = { ...initialRecruitment };
let contactData: ContactInfo = { ...initialContact };
let inquiriesData: PartnershipInquiry[] = [];

export const dataService = {
  // Profile
  getProfile: async (): Promise<OrgProfile> => {
    return profileData;
  },
  updateProfile: async (data: Partial<OrgProfile>): Promise<OrgProfile> => {
    profileData = { ...profileData, ...data };
    return profileData;
  },

  // Cabinets
  getCabinets: async (): Promise<Cabinet[]> => {
    return [...cabinetsData].sort((a, b) => b.year - a.year);
  },
  getActiveCabinet: async (): Promise<Cabinet | undefined> => {
    return cabinetsData.find((c) => c.isActive) || cabinetsData[0];
  },
  addCabinet: async (cabinet: Cabinet): Promise<Cabinet> => {
    cabinetsData.unshift(cabinet);
    return cabinet;
  },
  updateCabinet: async (id: string, update: Partial<Cabinet>): Promise<Cabinet | null> => {
    const idx = cabinetsData.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    cabinetsData[idx] = { ...cabinetsData[idx], ...update };
    return cabinetsData[idx];
  },
  deleteCabinet: async (id: string): Promise<boolean> => {
    const initialLen = cabinetsData.length;
    cabinetsData = cabinetsData.filter((c) => c.id !== id);
    return cabinetsData.length < initialLen;
  },

  // Programs
  getPrograms: async (category?: string, status?: string): Promise<Program[]> => {
    let result = [...programsData];
    if (category && category !== 'ALL') {
      result = result.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (status && status !== 'ALL') {
      result = result.filter((p) => p.status === status);
    }
    return result;
  },
  getProgramBySlug: async (slug: string): Promise<Program | undefined> => {
    return programsData.find((p) => p.slug === slug || p.id === slug);
  },
  addProgram: async (prog: Program): Promise<Program> => {
    programsData.unshift(prog);
    return prog;
  },
  updateProgram: async (id: string, update: Partial<Program>): Promise<Program | null> => {
    const idx = programsData.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    programsData[idx] = { ...programsData[idx], ...update };
    return programsData[idx];
  },
  deleteProgram: async (id: string): Promise<boolean> => {
    const initialLen = programsData.length;
    programsData = programsData.filter((p) => p.id !== id);
    return programsData.length < initialLen;
  },

  // Gallery
  getGallery: async (category?: string, year?: number): Promise<GalleryItem[]> => {
    let result = [...galleryData];
    if (category && category !== 'ALL') {
      result = result.filter((g) => g.category.toLowerCase() === category.toLowerCase());
    }
    if (year) {
      result = result.filter((g) => g.year === year);
    }
    return result;
  },
  addGalleryItem: async (item: GalleryItem): Promise<GalleryItem> => {
    galleryData.unshift(item);
    return item;
  },
  deleteGalleryItem: async (id: string): Promise<boolean> => {
    const initialLen = galleryData.length;
    galleryData = galleryData.filter((g) => g.id !== id);
    return galleryData.length < initialLen;
  },

  // Products
  getProducts: async (category?: string): Promise<Product[]> => {
    let result = [...productsData];
    if (category && category !== 'ALL') {
      result = result.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    return result;
  },
  getProductBySlug: async (slug: string): Promise<Product | undefined> => {
    return productsData.find((p) => p.slug === slug || p.id === slug);
  },
  addProduct: async (prod: Product): Promise<Product> => {
    productsData.unshift(prod);
    return prod;
  },
  updateProduct: async (id: string, update: Partial<Product>): Promise<Product | null> => {
    const idx = productsData.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    productsData[idx] = { ...productsData[idx], ...update };
    return productsData[idx];
  },
  deleteProduct: async (id: string): Promise<boolean> => {
    const initialLen = productsData.length;
    productsData = productsData.filter((p) => p.id !== id);
    return productsData.length < initialLen;
  },

  // Recruitment
  getRecruitment: async (): Promise<RecruitmentInfo> => {
    return recruitmentData;
  },
  updateRecruitment: async (data: Partial<RecruitmentInfo>): Promise<RecruitmentInfo> => {
    recruitmentData = { ...recruitmentData, ...data };
    return recruitmentData;
  },

  // Contact
  getContact: async (): Promise<ContactInfo> => {
    return contactData;
  },
  updateContact: async (data: Partial<ContactInfo>): Promise<ContactInfo> => {
    contactData = { ...contactData, ...data };
    return contactData;
  },

  // Inquiries
  getInquiries: async (): Promise<PartnershipInquiry[]> => {
    return [...inquiriesData].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },
  addInquiry: async (inquiry: Omit<PartnershipInquiry, 'id' | 'isReviewed' | 'createdAt'>): Promise<PartnershipInquiry> => {
    const newInquiry: PartnershipInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      isReviewed: false,
      createdAt: new Date().toISOString()
    };
    inquiriesData.unshift(newInquiry);
    return newInquiry;
  },
  markInquiryReviewed: async (id: string): Promise<boolean> => {
    const target = inquiriesData.find((i) => i.id === id);
    if (!target) return false;
    target.isReviewed = true;
    return true;
  }
};
