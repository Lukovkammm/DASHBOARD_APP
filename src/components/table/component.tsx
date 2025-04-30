import styles from './styles.module.css';

const Table = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Date</th>
          <th className={styles.th}>Description</th>
          <th className={styles.th}>Category</th>
          <th className={styles.th}>Account</th>
          <th className={styles.th}>Amount</th>
        </tr>
      </thead>
      <tbody>{/* Add rows here */}</tbody>
    </table>
  );
};

export default Table;
