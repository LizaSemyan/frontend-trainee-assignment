import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import { STATUS_LABELS } from '../../constants/adLabels';
import type { AdStatus, GetAdsParams } from '../../types';

interface Props {
  values: Partial<GetAdsParams>;
  onChange: (next: Partial<GetAdsParams>) => void;
  categories: { id: number; name: string }[];
}

const statusOptions: AdStatus[] = ['pending', 'approved', 'rejected', 'draft'];

export const Filter = ({ values, onChange, categories }: Props) => {
  const handleStatusChange = (status: AdStatus) => {
    const current = values.status ?? [];

    const updated = current.includes(status)
      ? current.filter((s) => s !== status)
      : [...current, status];

    onChange({ ...values, status: updated });
  };

  const handleClear = () => {
    onChange({
      status: undefined,
      categoryId: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      page: 1,
    });
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <FormGroup>
          <Typography sx={{ fontWeight: 600 }}>Статус</Typography>
          {statusOptions.map((st) => (
            <FormControlLabel
              key={st}
              control={
                <Checkbox
                  checked={values.status?.includes(st) ?? false}
                  onChange={() => handleStatusChange(st)}
                />
              }
              label={STATUS_LABELS[st]}
            />
          ))}
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel>Категория</InputLabel>
          <Select
            value={values.categoryId ?? ''}
            label="Категория"
            onChange={(e) =>
              onChange({
                ...values,
                categoryId: e.target.value ? Number(e.target.value) : undefined,
              })
            }
          >
            <MenuItem value="">Все категории</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Цена от"
            type="number"
            value={values.minPrice ?? ''}
            onChange={(e) =>
              onChange({
                ...values,
                minPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
          />

          <TextField
            label="Цена до"
            type="number"
            value={values.maxPrice ?? ''}
            onChange={(e) =>
              onChange({
                ...values,
                maxPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
          />
        </Box>

        <Button variant="outlined" color="inherit" onClick={handleClear}>
          Сбросить все фильтры
        </Button>
      </Box>
    </Paper>
  );
};
