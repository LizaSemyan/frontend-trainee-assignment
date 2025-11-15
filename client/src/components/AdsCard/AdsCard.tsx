import { Box, Button, Card, CardMedia, Chip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { PRIORITY_LABELS, STATUS_LABELS } from '../../constants/adLabels';
import type { Advertisement } from '../../types';

export const AdsCard = ({ ad }: { ad: Advertisement }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        p: 2,
        alignItems: 'center',
        gap: 2,
      }}
    >
      <CardMedia
        component="img"
        image={ad.images?.[0]}
        alt={ad.title}
        sx={{
          width: 125,
          height: 125,
          borderRadius: 2,
          backgroundColor: '#f0f0f0',
        }}
      />

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">{ad.title}</Typography>

        <Typography sx={{ fontWeight: 700 }}>{ad.price.toLocaleString()} ₽</Typography>

        <Typography color="text.secondary">{ad.category}</Typography>

        <Typography color="text.secondary">
          • {new Date(ad.createdAt).toLocaleDateString('ru-RU')}
        </Typography>

        <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
          <Chip size="small" label={STATUS_LABELS[ad.status]} />
          <Chip size="small" label={PRIORITY_LABELS[ad.priority]} />
        </Box>
      </Box>

      <Box>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/item/${ad.id}`}
          sx={{ color: '#fff' }}
        >
          Открыть →
        </Button>
      </Box>
    </Card>
  );
};
