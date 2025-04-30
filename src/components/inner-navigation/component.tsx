import styles from './styles.module.css';
import Icon from '../icon';
import { NavLink } from 'react-router';

interface InnerNavigationProps {
  items: { icon: string; label: string; path: string }[];
}

const InnerNavigation = ({ items }: InnerNavigationProps) => {
  return (
    <div className={styles['inner-navigation']}>
      {items.map(({ icon, label, path }) => (
        <NavLink
          key={label}
          to={path}
          className={({ isActive }) => {
            console.log({ isActive });

            return isActive ? styles['active'] : '';
          }}
        >
          {icon ? <Icon icon={icon} /> : null}
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default InnerNavigation;
