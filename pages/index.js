import LogIn from "@/components/form_login";
import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.header}>
        <Link href="./ingredients">Choose ingredients</Link>
      </nav>
      <div>
        <LogIn />
      </div>
    </>
  );
}
