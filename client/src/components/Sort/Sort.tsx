import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';

import type { GetAdsParams, SortBy, SortOrder } from '../../types';

interface Props {
  values: Partial<GetAdsParams>;
  onChange: (next: Partial<GetAdsParams>) => void;
}

const sortByOptions: SortBy[] = ['createdAt', 'price', 'priority'];
const sortOrderOptions: SortOrder[] = ['asc', 'desc'];

const sortByLabels: Record<SortBy, string> = {
  createdAt: 'Дате создания',
  price: 'Цене',
  priority: 'Приоритету',
};

const sortOrderLabels: Record<SortOrder, string> = {
  asc: 'По возрастанию',
  desc: 'По убыванию',
};

export const Sort = ({ values, onChange }: Props) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <FormControl sx={{ width: 200 }}>
          <InputLabel>Сортировать по</InputLabel>
          <Select
            value={values.sortBy ?? ''}
            label="Сортировать по"
            onChange={(e) => onChange({ ...values, sortBy: e.target.value as SortBy })}
          >
            {sortByOptions.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {sortByLabels[opt]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: 200 }}>
          <InputLabel>Порядок</InputLabel>
          <Select
            value={values.sortOrder ?? ''}
            label="Порядок"
            onChange={(e) => onChange({ ...values, sortOrder: e.target.value as SortOrder })}
          >
            {sortOrderOptions.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {sortOrderLabels[opt]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => onChange({ sortBy: undefined, sortOrder: undefined, page: 1 })}
        >
          Сбросить сортировку
        </Button>
      </Box>
    </Paper>
  );
};
