import Link from "next/link";
import styles from "@/styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.header}>
      <div>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="./ingredients">
          <span>Choose toppings</span>
        </Link>
        <Link href="./delivery">
          <span>Delivery options</span>
        </Link>
        <Link href="./review">
          <span>Receipt</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
