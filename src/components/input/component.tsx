import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ name, label, placeholder }: InputProps) => {
  return (
    <>
      {label && (
        <label className={styles['label']} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type="text"
        className={styles['input']}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
