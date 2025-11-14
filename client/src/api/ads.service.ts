import type { AdsListResponse, GetAdsParams } from '../types';
import { api } from './axios';

export const adsService = {
  getAds(params?: GetAdsParams) {
    return api.get<AdsListResponse>('/ads', { params });
  },
};
