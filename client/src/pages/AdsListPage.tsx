import { Box, CircularProgress, Stack, Typography } from '@mui/material';

import { AdsCard } from '../components';
import { PaginationBlock } from '../components';
import { Sort } from '../components';
import { Search } from '../components';
import { Filter } from '../components';
import { useAdsListPageLogic } from '../hooks/useAppListPage';

const AdsListPage = () => {
  const { ads, pagination, categories, filters, loading, applyFilters, changePage } =
    useAdsListPageLogic();

  return (
    <Box>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Список объявлений
      </Typography>

      <Stack spacing={2}>
        <Search values={filters} onChange={applyFilters} />
        <Sort values={filters} onChange={applyFilters} />
        <Filter values={filters} onChange={applyFilters} categories={categories} />

        {loading && (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <CircularProgress />
          </Box>
        )}

        {!loading && ads.map((ad) => <AdsCard key={ad.id} ad={ad} />)}
      </Stack>

      {!loading && pagination && (
        <>
          <PaginationBlock
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={(page) => changePage(page)}
          />

          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
            Всего объявлений: {pagination.totalItems}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default AdsListPage;
