import List from "@/components/list";
import { useContext } from "react";
import Oven from "@/components/oven";
import styles from "@/styles/List.module.css";
import { UserContext } from "@/components/UserContext"

export default function Home() {
  const { name } = useContext(UserContext);

  return (
    <div>
      <div className={styles.header}>
        <h2>Make Your Pizza</h2>
        <p>{name || "Customer"}, please select the ingredients <br /> you'd like on your pizza.</p>
      </div>
      <div className={styles.listOven}>
        <List />
        <Oven />
      </div>
    </div>
  );
}
