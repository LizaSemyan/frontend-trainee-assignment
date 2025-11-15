import { Box, Card, Divider, Stack, Typography } from '@mui/material';

import type { Advertisement } from '../../types';
import { AdCharacteristics } from '../AdCharacteristics/AdCharasteristics';
import { AdGallery } from '../AdGallery/AdGallery';
import { AdModerationHistory } from '../AdModerationHistory/AdModerationHistory';
import { AdSeller } from '../AdSeller/AdSeller';

interface AdFullCardProps {
  ad: Advertisement;
}

export const AdFullCard = ({ ad }: AdFullCardProps) => (
  <Card variant="outlined" sx={{ p: 3, mb: 2 }}>
    <Typography variant="h5" sx={{ textAlign: 'center', mb: 1 }}>
      {ad.title}
    </Typography>

    <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
      <Box sx={{ flex: 1 }}>
        <AdGallery images={ad.images} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <AdModerationHistory history={ad.moderationHistory} />
      </Box>
    </Stack>

    <Divider sx={{ my: 2 }} />

    <Typography variant="h6">Описание</Typography>
    <Typography>{ad.description}</Typography>

    <Divider sx={{ my: 2 }} />

    <AdCharacteristics characteristics={ad.characteristics} />

    <Divider sx={{ my: 2 }} />

    <AdSeller seller={ad.seller} />
  </Card>
);
