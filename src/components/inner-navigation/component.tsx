import styles from './styles.module.css';
import Icon from '../icon';
import { NavLink, NavLinkRenderProps } from 'react-router';

interface InnerNavigationProps {
  items: { icon: string; label: string; path: string }[];
}

const InnerNavigation = ({ items }: InnerNavigationProps) => {
  const style = ({ isActive, isPending }: NavLinkRenderProps) => {
    console.log({ isActive, isPending });

    return isActive
      ? {
          backgroundColor: 'var(--accent-color)',
          color: 'var(--inverse-text-color)',
          fontWeight: 600,
        }
      : undefined;
  };

  return (
    <div className={styles['inner-navigation']}>
      {items.map(({ icon, label, path }) => (
        <NavLink key={label} to={path} style={style}>
          {icon ? <Icon icon={icon} /> : null}
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default InnerNavigation;
