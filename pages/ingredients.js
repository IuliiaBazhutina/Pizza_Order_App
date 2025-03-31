import List from "@/components/list";
import { useContext, useState } from "react";
import { UserContext } from "@/components/form_login";
import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export default function Home() {
  //   const { name } = useContext(UserContext);

  return (
    <>
      <nav className={styles.header}>
        <Link href="/">Home</Link>
      </nav>
      <div>
        <div style={{ margin: "30px 0", width: "100%", textAlign: "center" }}>
          <h2 style={{ marginBottom: "10px" }}>Make Your Pizza</h2>
          <p>Please select the ingredients you'd like on your pizza.</p>
        </div>
        <List />
      </div>
    </>
  );
}
