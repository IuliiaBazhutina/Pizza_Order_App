import styles from "@/styles/Pizza.module.css";
import { Suspense, lazy } from "react";

const Pizza = lazy(() => import("@/components/pizza"));

const Oven = () => {
  return (
    <div className={styles.ovenWrapper}>
      <div className={styles.controls}>
        <div className={styles.controlsTop}></div>
        <div className={styles.controlsBottom}></div>
      </div>
      <div className={styles.oven}>
        <div className={styles.window}>
          <Suspense fallback={<div>Cooking...</div>}>
            <Pizza />
          </Suspense>
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
