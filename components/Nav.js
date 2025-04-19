import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { usePizza } from "@/components/PizzaContext";

const Nav = () => {
  // this will ensure that the order cannot be finished without a crust
  const { canOrder } = usePizza();

  return (
    <nav className={styles.header}>
      <div className={styles.navWrapper}>
        <div className={styles.navItem}>
          <Link href="/">
            <span>Home</span>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="./ingredients">
            <span>Choose toppings</span>
          </Link>
        </div>
        {canOrder() && (
          <div className={styles.navItem}>
            <Link href="./delivery">
              <span>Delivery options</span>
            </Link>
          </div>
        )}
        {canOrder() && (
          <div className={styles.navItem}>
            <Link href="./review">
              <span>Receipt</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
