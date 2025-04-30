import styles from './styles.module.css';

const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles['card-layout']}>{children}</div>;
};

export default CardLayout;
