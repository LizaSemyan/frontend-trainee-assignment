import { Box, Button, Card, CircularProgress, Stack, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

import { statsService } from '../api/stats.service';
import {
  StatsActivityChart,
  StatsCategoriesChart,
  StatsDecisionsPie,
  StatsSummaryCard,
} from '../components';
import { PERIODS } from '../constants/periods';
import type { ActivityData, DecisionsData, Period, PeriodParams, StatsSummary } from '../types';

const StatisticsPage = () => {
  const [period, setPeriod] = useState<Period>('today');

  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const [summary, setSummary] = useState<StatsSummary | null>(null);
  const [activity, setActivity] = useState<ActivityData[]>([]);
  const [decisions, setDecisions] = useState<DecisionsData | null>(null);
  const [categories, setCategories] = useState<Record<string, number>>({});

  const [loading, setLoading] = useState(true);

  const buildParams = (): PeriodParams => {
    if (period !== 'custom') return { period };

    return {
      period: 'custom',
      startDate: startDate ? startDate.format('YYYY-MM-DD') : undefined,
      endDate: endDate ? endDate.format('YYYY-MM-DD') : undefined,
    };
  };

  const load = async () => {
    setLoading(true);
    try {
      const params = buildParams();

      if (period === 'custom' && (!params.startDate || !params.endDate)) {
        setLoading(false);
        return;
      }

      const [summaryData, activityData, decisionsData, categoriesData] = await Promise.all([
        statsService.getSummary(params),
        statsService.getActivityChart(params),
        statsService.getDecisionsChart(params),
        statsService.getCategoriesChart(params),
      ]);

      setSummary(summaryData);
      setActivity(activityData);
      setDecisions(decisionsData);
      setCategories(categoriesData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [period, startDate, endDate]);

  const customNotReady = period === 'custom' && (!startDate || !endDate);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={8}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Статистика модератора
      </Typography>

      <Stack spacing={2}>
        <Card sx={{ p: 2 }}>
          <Stack direction="row" gap={2}>
            {PERIODS.map((p) => (
              <Button
                key={p.id}
                variant={period === p.id ? 'contained' : 'outlined'}
                onClick={() => setPeriod(p.id)}
              >
                {p.label}
              </Button>
            ))}
          </Stack>

          {period === 'custom' && (
            <Stack direction="row" gap={2} sx={{ mt: 2 }}>
              <DatePicker
                label="Начальная дата"
                value={startDate}
                onChange={(v) => setStartDate(v)}
                slotProps={{ textField: { fullWidth: true } }}
              />

              <DatePicker
                label="Конечная дата"
                value={endDate}
                onChange={(v) => setEndDate(v)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Stack>
          )}
        </Card>

        {customNotReady ? (
          <Typography variant="body1" color="text.secondary">
            Выберите начальную и конечную дату, чтобы увидеть статистику.
          </Typography>
        ) : (
          <>
            {summary && <StatsSummaryCard summary={summary} />}

            {activity && <StatsActivityChart data={activity} />}

            {decisions && <StatsDecisionsPie data={decisions} />}

            {categories && <StatsCategoriesChart data={categories} />}
          </>
        )}
      </Stack>
    </LocalizationProvider>
  );
};

export default StatisticsPage;
