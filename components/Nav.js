import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { usePizza } from "@/components/PizzaContext";

const Nav = () => {
  // this will ensure that the order cannot be finished without a crust
  const { hasCrust } = usePizza();

  return (
    <nav className={styles.header}>
      <div>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="./ingredients">
          <span>Choose toppings</span>
        </Link>
        {hasCrust() && <Link href="./delivery">
          <span>Delivery options</span>
        </Link>}
        {hasCrust() && <Link href="./review">
          <span>Receipt</span>
        </Link>}
      </div>
    </nav>
  );
};

export default Nav;
