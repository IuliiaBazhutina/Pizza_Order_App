import styles from "@/styles/Pizza.module.css";
import Pizza from "./pizza";
const Oven = () => {
  return (
    <div>
      <div className={styles.controls}>
        <div className={styles.controlsTop}></div>
        <div className={styles.controlsBottom}></div>
      </div>
      <div className={styles.oven}>
        <div className={styles.window}>
          <Pizza />
        </div>
      </div>
      <div className={styles.feetWrapper}>
        <div className={styles.feet}></div>
        <div className={styles.feet}></div>
      </div>
    </div>
  );
};
export default Oven;
