import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import type { GetAdsParams } from '../../types';

interface Props {
  values: Partial<GetAdsParams>;
  onChange: (next: Partial<GetAdsParams>) => void;
}

export const Search = ({ values, onChange }: Props) => {
  const [text, setText] = useState(values.search ?? '');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange({ ...values, search: text });
    }, 400);

    return () => clearTimeout(timeout);
  }, [text]);

  const clearSearch = () => {
    setText('');
    onChange({ ...values, search: undefined });
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        fullWidth
        label="Поиск по названию"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: text && (
              <InputAdornment position="end">
                <IconButton onClick={clearSearch}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Paper>
  );
};
