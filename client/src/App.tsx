import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppLayout } from './components';
import AppRouter from './router/AppRouter';
import { theme } from './theme.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
