import { Link, Outlet } from "react-router";

const Settings = () => {
  return (
    <main>
      <h1>Settings</h1>

      <div>
        <Link to="profile">Profile</Link>
        <Link to="preferences">Preferences</Link>
      </div>

      <Outlet />
    </main>
  );
};

export default Settings;
