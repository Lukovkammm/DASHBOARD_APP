import "./sidebar.css";
import { NavLink, NavLinkRenderProps } from "react-router";
import { NavItem } from "./types";
import Icon from "../../components/icon";

function Sidebar({ navItems }: { navItems: NavItem[] }) {
  const style = ({ isActive }: NavLinkRenderProps) =>
    isActive
      ? {
          fontWeight: 800,
        }
      : undefined;

  return (
    <nav className="sidebar">
      <h1>financy</h1>

      <ul>
        {navItems.map(({ label, path, icon }) => (
          <li key={label}>
            <NavLink to={path} style={style}>
              <Icon icon={icon} /> {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
