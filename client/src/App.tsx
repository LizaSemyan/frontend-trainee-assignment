import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppLayout } from './components';
import AppRouter from './router/AppRouter';
import { store } from './store/store.ts';
import { theme } from './theme.ts';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppLayout>
            <AppRouter />
          </AppLayout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
