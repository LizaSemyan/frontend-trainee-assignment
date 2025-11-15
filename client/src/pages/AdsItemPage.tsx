import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { adsService } from '../api/ads.service';
import { AdFullCard } from '../components';
import { AdActions } from '../components';
import type { Advertisement } from '../types';

const AdsItemPage = () => {
  const { id } = useParams();
  const [ad, setAd] = useState<Advertisement | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    if (!id) return;
    setLoading(true);
    const data = await adsService.getAdById(Number(id));
    setAd(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [id]);

  if (loading) return <Typography>Загрузка…</Typography>;
  if (!ad) return <Typography>Объявление не найдено</Typography>;

  return (
    <Box sx={{ p: 3, maxWidth: 'md' }}>
      <AdFullCard ad={ad} />
      <AdActions ad={ad} reload={load} />
    </Box>
  );
};

export default AdsItemPage;
