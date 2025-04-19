import { Suspense, useContext, lazy } from "react";
import Oven from "@/components/oven";
import styles from "@/styles/List.module.css";
import { UserContext } from "@/components/UserContext";

const List = lazy(() => import("@/components/list"));

export default function Home() {
  const { name } = useContext(UserContext);

  return (
    <div>
      <div className={styles.header}>
        <h2>Make Your Pizza</h2>
        <p>
          {name || "Customer"}, please select the ingredients <br /> you'd like on your pizza.
        </p>
      </div>
      <div className={styles.listOven}>
        <Suspense fallback={<div>Loading...</div>}>
          <List />
        </Suspense>
        <Oven />
      </div>
    </div>
  );
}
