import List from "@/components/list";
import { useContext } from "react";
import Oven from "@/components/oven";
import styles from "@/styles/List.module.css";
import {UserContext} from "@/components/UserContext"

export default function Home() {
    const {name} = useContext(UserContext);

  return (
    <div> 
      <div style={{ margin: "30px 0", width: "100%", textAlign: "center" }}>
        <h2 style={{ marginBottom: "10px" }}>Make Your Pizza</h2>
        <p>{name}, please select the ingredients you'd like on your pizza.</p>
      </div>
      <div className={styles.listOven}>
        <List />
        <Oven />     
      </div>
    </div> 
  );
}
