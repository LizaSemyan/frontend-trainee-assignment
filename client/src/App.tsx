import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdsItemPage from './pages/AdsItemPage';
import AdsListPage from './pages/AdsListPage';
import NotFoundPage from './pages/NotFoundPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/item/:id" element={<AdsItemPage />} />
        <Route path="/list" element={<AdsListPage />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
