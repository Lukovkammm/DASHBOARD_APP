import styles from './styles.module.css';

interface SelectorProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: string[];
}

const Selector = ({ label, name, options }: SelectorProps) => {
  return (
    <>
      <label className={styles['label']} htmlFor={name}>
        {label}
      </label>
      <select id={name} name={name}>
        {options.map((option) => (
          <option key={option.toLowerCase()} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Selector;
