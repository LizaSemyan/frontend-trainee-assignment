import { Box, Card, Typography } from '@mui/material';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface StatsCategoriesChartProps {
  data: Record<string, number>;
}

export const StatsCategoriesChart = ({ data }: StatsCategoriesChartProps) => {
  const formatted = Object.entries(data).map(([key, value]) => ({
    category: key,
    value,
  }));

  return (
    <Card sx={{ p: 2 }}>
      <Typography fontWeight="bold" mb={2}>
        Категории объявлений
      </Typography>

      <Box height={300}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formatted}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" name="Количество" fill="#4caf50" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};
