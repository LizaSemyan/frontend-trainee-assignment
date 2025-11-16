import { Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import type { StatsSummary } from '../../types';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

interface Props {
  summary: StatsSummary;
}

export const StatsSummaryCard = ({ summary }: Props) => {
  const items = [
    { label: 'Проверено', value: summary.totalReviewed },
    { label: 'Одобрено', value: `${summary.approvedPercentage.toFixed(1)}%` },
    { label: 'Отклонено', value: `${summary.rejectedPercentage.toFixed(1)}%` },
    { label: 'Ср. время', value: `${formatSecondsToMinutes(summary.averageReviewTime)} мин` },
  ];

  return (
    <Grid container spacing={2} sx={{ width: '100%' }} justifyContent="space-between">
      {items.map((item) => (
        <Grid key={item.label}>
          <Card
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Typography color="text.secondary" fontSize={18} sx={{ mb: 1 }}>
              {item.label}
            </Typography>

            <Typography variant="h4" fontWeight="bold">
              {item.value}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
