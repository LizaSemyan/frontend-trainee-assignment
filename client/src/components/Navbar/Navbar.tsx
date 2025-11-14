import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ borderRadius: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Авито Модерация</Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={NavLink} to="/list">
            Объявления
          </Button>

          <Button color="inherit" component={NavLink} to="/stats">
            Статистика
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
