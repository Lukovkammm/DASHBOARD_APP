import styles from './styles.module.css';
import { NavLink, NavLinkRenderProps } from 'react-router';
import Icon from '../../components/icon';
import { sidebarItems } from './constants';

function Sidebar() {
  const style = ({ isActive }: NavLinkRenderProps) =>
    isActive
      ? {
        'background-color': 'var(--accent-color)',
        color: 'var(--inverse-text-color)',
        fontWeight: 600,
      }
      : undefined;

  return (
    <nav className={styles['sidebar']}>
      <h1 className={styles['sidebar-header']}>financy</h1>

      <div className={styles['sidebar-menu']}>
        {sidebarItems.map(({ label, path, icon }) => (
          <NavLink
            key={label}
            className={styles['sidebar-menu-item']}
            to={path}
            style={style}
          >
            <Icon icon={icon} /> {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
