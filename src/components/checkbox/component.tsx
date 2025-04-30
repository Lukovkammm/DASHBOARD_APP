import styles from './styles.module.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = ({ label, name }: CheckboxProps) => {
  return (
    <div className={styles['checkbox-container']}>
      <label htmlFor="disabled-checkbox">{label}</label>
      <span className={styles['custom-checkbox']}></span>
      <input type="checkbox" id={name} checked />
    </div>
  );
};

export default Checkbox;
