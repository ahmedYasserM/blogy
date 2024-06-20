import styles from "./pagination.module.css";

export function Pagination(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  );
}
