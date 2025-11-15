import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { adsService } from '../api/ads.service';
import type { Advertisement } from '../types';
import type { Pagination } from '../types';
import type { GetAdsParams } from '../types';
import { extractCategories } from '../utils/extractCategories';
import { normalizePage } from '../utils/normalizePage';

export const useAdsListPageLogic = () => {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Partial<GetAdsParams>>({});
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = normalizePage(searchParams.get('page') || 1);

  const changePage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  const loadAds = useCallback(
    async (page: number, extra?: Partial<GetAdsParams>) => {
      setLoading(true);
      try {
        const params = { page, limit: 10, ...filters, ...extra };
        const res = await adsService.getAds(params);
        if (page > res.data.pagination.totalPages && res.data.pagination.totalPages > 0) {
          const lastPage = res.data.pagination.totalPages;
          setSearchParams({ page: String(lastPage) });
          return loadAds(lastPage, extra);
        }
        setAds(res.data.ads);
        const uniqueCategories = extractCategories(res.data.ads);

        setCategories(uniqueCategories);

        setPagination(res.data.pagination);
        setSearchParams({ page: String(page) });
      } finally {
        setLoading(false);
      }
    },
    [filters, setSearchParams],
  );

  const applyFilters = (nextFilters: Partial<GetAdsParams>) => {
    setSearchParams({ page: '1' });
    setFilters((prev) => ({
      ...prev,
      ...nextFilters,
    }));
  };

  useEffect(() => {
    loadAds(currentPage);
  }, [currentPage, filters, loadAds]);

  return {
    ads,
    pagination,
    categories,
    filters,
    loading,
    applyFilters,
    changePage,
  };
};
