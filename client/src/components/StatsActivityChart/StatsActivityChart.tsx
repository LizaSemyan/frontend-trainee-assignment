import { Box, Card, Typography } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import type { ActivityData } from '../../types';
import { formatDateShort } from '../../utils/formatDateTime';

interface StatsActivityChartProps {
  data: ActivityData[];
}

export const StatsActivityChart = ({ data }: StatsActivityChartProps) => {
  const formatted = data.map((d) => ({
    date: formatDateShort(d.date),
    approved: d.approved,
    rejected: d.rejected,
    requestChanges: d.requestChanges,
  }));

  return (
    <Card sx={{ p: 2 }}>
      <Typography fontWeight="bold" mb={2}>
        График активности
      </Typography>

      <Box height={250}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formatted}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />

            <Bar dataKey="approved" fill="#4caf50" name="Одобрено" />
            <Bar dataKey="rejected" fill="#f44336" name="Отклонено" />
            <Bar dataKey="requestChanges" fill="#ff9800" name="Доработка" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};
