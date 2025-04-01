import styles from "@/styles/Pizza.module.css";

const Oven = () => {
  return (
    <div>
      <div className={styles.controls}></div>
      <div className={styles.oven}>
        <div className={styles.window}>
          <Pizza />
        </div>
        <div className={styles.feet}></div>
        <div className={styles.feet}></div>
      </div>
    </div>
  );
};
export default Oven;
