import { Box, Card, Typography } from '@mui/material';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import type { DecisionsData } from '../../types';

interface StatsDecisionPieProps {
  data: DecisionsData;
}

const COLORS = ['#4caf50', '#f44336', '#ff9800'];

export const StatsDecisionsPie = ({ data }: StatsDecisionPieProps) => {
  const chartData = [
    { name: 'Одобрено', value: data.approved },
    { name: 'Отклонено', value: data.rejected },
    { name: 'Доработка', value: data.requestChanges },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography fontWeight="bold" mb={2}>
        Распределение решений
      </Typography>

      <Box height={250}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              data={chartData}
              outerRadius={90}
              label={(entry) => `${entry.value.toFixed(1)}%`}
            >
              {chartData.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};
