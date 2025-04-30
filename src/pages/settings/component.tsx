import { Outlet } from 'react-router';
import InnerNavigation from '../../components/inner-navigation';
import CardLayout from '../../layouts/card';

const innerNavigationItems = [
  { label: 'Profile', icon: '', path: 'profile' },
  { label: 'Preferences', icon: '', path: 'preferences' },
];

const Settings = () => {
  return (
    <>
      <h1>Settings</h1>
      <InnerNavigation items={innerNavigationItems} />
      <CardLayout>
        <Outlet />
      </CardLayout>
    </>
  );
};

export default Settings;
