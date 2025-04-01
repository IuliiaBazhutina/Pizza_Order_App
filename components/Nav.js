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
          <span>Choose ingredients</span>
        </Link>
        <Link href="./account">
          <span>Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
