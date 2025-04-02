import { PizzaContext, usePizza } from "@/components/PizzaContext";
import { createContext, useState, useContext } from "react";
import { PizzaProvider } from "@/components/PizzaContext";
import { useRouter } from "next/router";
import styles from "@/styles/review.module.css";
import { UserContext } from "@/components/UserContext";

export default function Account() {
  const { selectedToppings } = useContext(PizzaContext);

  const { name } = useContext(UserContext);

  const { calculateTotal } = useContext(PizzaContext); // Access the function from context

  const handleCalculateTotal = () => {
    calculateTotal();
  };

  const router = useRouter();
  const { data } = router.query;

  return (
    <div>
      <h1>{name}, thank you for your order!</h1>

      <h3 style={{ marginTop: "30px" }}>{name}'s pizza:</h3>

      <div className={styles.toppings}>
        <ul className={styles.list}>
          {selectedToppings.map((item) => (
            <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
            <span style={{ fontWeight: "bolder", marginTop: "10px" }}>Total:</span>
            <span style={{ fontWeight: "bolder", marginTop: "10px" }}> ${calculateTotal()}</span>
          </div>{" "}
        </ul>
      </div>
      <p style={{ fontWeight: "bold", marginTop: "30px" }}>{data}</p>
    </div>
  );
}
