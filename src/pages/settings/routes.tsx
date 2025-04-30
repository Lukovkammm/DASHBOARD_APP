import { Navigate, Route, Routes } from 'react-router';
import Settings from './component';
import Profile from './profile';
import Preferences from './preferences';

const SettingsRoutes = () => (
  <Routes>
    <Route path="/" element={<Settings />}>
      <Route index element={<Navigate to="profile" replace />} />
      <Route path="profile" element={<Profile />} />
      <Route path="preferences" element={<Preferences />} />
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Route>
  </Routes>
);

export default SettingsRoutes;
