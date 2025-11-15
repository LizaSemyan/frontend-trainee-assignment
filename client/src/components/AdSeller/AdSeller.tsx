import { Box, Typography } from '@mui/material';

import type { Seller } from '../../types';
import { formatDate } from '../../utils/formatDateTime';

interface AdSellerProps {
  seller: Seller;
}

export const AdSeller = ({ seller }: AdSellerProps) => (
  <Box>
    <Typography variant="h6">Продавец</Typography>

    <Typography>
      Имя: {seller.name} | ⭐ {seller.rating}
    </Typography>
    <Typography>Всего объявлений: {seller.totalAds}</Typography>
    <Typography>На сайте с: {formatDate(seller.registeredAt)}</Typography>
  </Box>
);
