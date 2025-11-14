import type { Pagination } from '../Pagination';

export type AdStatus = 'pending' | 'approved' | 'rejected' | 'draft';

export type AdPriority = 'normal' | 'urgent';

export type ModerationAction = 'approved' | 'rejected' | 'requestChanges';

export type SortBy = 'createdAt' | 'price' | 'priority';

export type SortOrder = 'asc' | 'desc';

export interface Seller {
  id: number;
  name: string;
  rating: string;
  totalAds: number;
  registeredAt: string;
}

export interface ModerationHistoryItem {
  id: number;
  moderatorId: number;
  moderatorName: string;
  action: ModerationAction;
  reason: string | null;
  comment: string;
  timestamp: string;
}

export interface Advertisement {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  categoryId: number;
  status: AdStatus;
  priority: AdPriority;
  createdAt: string;
  updatedAt: string;
  images: string[];
  seller: Seller;
  characteristics: Record<string, string>;
  moderationHistory: ModerationHistoryItem[];
}

export interface GetAdsParams {
  page?: number;
  limit?: number;
  status?: AdStatus[];
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}

export interface AdsListResponse {
  ads: Advertisement[];
  pagination: Pagination;
}
