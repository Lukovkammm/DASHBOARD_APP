import "./App.css";
import { Route, Routes } from "react-router";

import Home from "./pages/home/home";
import Settings from "./pages/settings";
import MainLayout from "./layouts/main/main";
import Sidebar from "./feature/sidebar";
import { NavItem } from "./feature/sidebar/types";

const sidebarItems: NavItem[] = [
  { label: "Home", path: "/", icon: "home" },
  { label: "Budget", path: "/budget", icon: "wallet" },
  { label: "Transactions", path: "/transactions", icon: "credit-card-alt" },
  { label: "Goals", path: "/goals", icon: "coin-stack" },
  { label: "Settings", path: "/settings", icon: "cog" },
  // { label: "Login", path: '/login', icon: "log-in-circle" },
  { label: "Logout", path: "/logout", icon: "log-out-circle" },
];

const App = () => {
  return (
    <>
      <MainLayout>
        <Sidebar navItems={sidebarItems} />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/budget" element={<h2>Budget</h2>} />
          <Route path="/transactions" element={<h2>Transactions</h2>} />
          <Route path="/goals" element={<h2>Goals</h2>} />
          <Route path="/settings" element={<Settings />}>
            <Route index element={<h2>Profile</h2>} />
            <Route path="profile" element={<h2>Profile</h2>} />
            <Route path="preferences" element={<h2>Preferences</h2>} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Route>
          {/* <Route path="/login" element={<h2>Login</h2>} /> */}
          <Route path="/logout" element={<h2>Logout</h2>} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
