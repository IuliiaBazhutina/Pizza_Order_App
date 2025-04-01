import List from "@/components/list";
import { useContext, useState } from "react";
import { UserContext } from "@/components/form_login";
import Oven from "@/components/oven";
import styles from "@/styles/List.module.css";
import { PizzaProvider } from "@/components/PizzaContext";

export default function Home() {
  //   const { name } = useContext(UserContext);

  return (
    <PizzaProvider>
      <div style={{ margin: "30px 0", width: "100%", textAlign: "center" }}>
        <h2 style={{ marginBottom: "10px" }}>Make Your Pizza</h2>
        <p>Please select the ingredients you'd like on your pizza.</p>
      </div>
      <div className={styles.listOven}>
        <List />
        <Oven />
      </div>
    </PizzaProvider>
  );
}
