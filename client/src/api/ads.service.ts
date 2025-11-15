import type { AdsListResponse, Advertisement, GetAdsParams, ModerationPayload } from '../types';
import { api } from './axios';

export const adsService = {
  getAds(params?: GetAdsParams) {
    return api.get<AdsListResponse>('/ads', { params });
  },

  async getAdById(id: number) {
    const { data } = await api.get<Advertisement>(`/ads/${id}`);
    return data;
  },

  approveAd(id: number) {
    return api.post(`/ads/${id}/approve`);
  },

  rejectAd(id: number, payload: ModerationPayload) {
    return api.post(`/ads/${id}/reject`, payload);
  },

  requestChangesAd(id: number, payload: ModerationPayload) {
    return api.post(`/ads/${id}/request-changes`, payload);
  },
};
