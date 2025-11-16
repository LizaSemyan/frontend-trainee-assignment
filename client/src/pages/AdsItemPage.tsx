import { Box, Button, Typography, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { adsService } from '../api/ads.service';
import { AdFullCard } from '../components';
import { AdActions } from '../components';
import type { Advertisement } from '../types';

import { useAppSelector } from '../store/hooks';
import { selectPrevNextIds } from '../store/adsSelectors';

const AdsItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { prevId, nextId } = useAppSelector((state) => selectPrevNextIds(state, Number(id)));

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
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Button variant="contained" onClick={() => navigate('/list')}>
          ← К списку
        </Button>

        <Stack direction="row" spacing={1}>
          {prevId && (
            <Button variant="contained" onClick={() => navigate(`/item/${prevId}`)}>
              ◄ Предыдущее
            </Button>
          )}

          {nextId && (
            <Button variant="contained" onClick={() => navigate(`/item/${nextId}`)}>
              Следующее ►
            </Button>
          )}
        </Stack>
      </Stack>

      <AdFullCard ad={ad} />
      <AdActions ad={ad} reload={load} />
    </Box>
  );
};

export default AdsItemPage;
