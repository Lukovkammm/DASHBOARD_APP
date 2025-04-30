import Icon from '../icon';
import styles from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  text: string;
  className: string;
}

const Button = ({ icon, text, className }: ButtonProps) => {
  return (
    <button className={styles[className]}>
      <Icon icon={icon} />
      {text}
    </button>
  );
};

export default Button;
