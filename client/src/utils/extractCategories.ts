import type { Advertisement } from '../types';

export const extractCategories = (ads: Advertisement[]) => {
  return Array.from(new Map(ads.map((ad) => [ad.categoryId, ad.category]))).map(([id, name]) => ({
    id,
    name,
  }));
};
