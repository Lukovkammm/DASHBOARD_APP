import styles from './App.module.css';
import { Route, Routes } from 'react-router';

import Sidebar from './feature/sidebar';
import Home from './pages/home';
import Budget from './pages/budget';
import Goals from './pages/goals';
import TransactionsRoutes from './pages/transactions/routes';
import SettingsRoutes from './pages/settings';

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/transactions/*" element={<TransactionsRoutes />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/settings/*" element={<SettingsRoutes />} />

          <Route path="/logout" element={<h2>Logout</h2>} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
