import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { adsService } from '../api/ads.service';
import { AdsCard } from '../components';
import type { Advertisement } from '../types';

const AdsListPage = () => {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAds = async (page = 1) => {
    setLoading(true);
    try {
      const res = await adsService.getAds({ page, limit: 10 });
      setAds(res.data.ads);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <Box>
      <Typography variant="h2">Список объявлений</Typography>

      {loading && (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && ads.map((ad) => <AdsCard key={ad.id} ad={ad} />)}
    </Box>
  );
};

export default AdsListPage;
