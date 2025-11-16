import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f7f7f7',
      paper: '#ffffff',
    },
    primary: {
      main: '#00AAFF',
    },
    secondary: {
      main: '#9c27b0',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
    h2: {
      fontWeight: 600,
      fontSize: 40,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
      fontSize: 18,
    },
    body1: {
      fontSize: 15,
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          textTransform: 'none',
          color: '#fff',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          marginBottom: '10px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#00AAFF',
          '&:hover': {
            backgroundColor: '#135ca4ff',
          },
          '& .MuiSvgIcon-root': {
            color: '#fff',
          },
        },
      },
    },
  },
});
