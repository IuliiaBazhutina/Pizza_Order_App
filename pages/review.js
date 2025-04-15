import { PizzaContext } from "@/components/PizzaContext";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/review.module.css";
import { UserContext } from "@/components/UserContext";

export default function Account() {
  const { selectedToppings, calculateTotal, hasCrust } = useContext(PizzaContext);
  const { name } = useContext(UserContext);
  const router = useRouter();
  const { data } = router.query;

  useEffect(() => {
    if (!hasCrust()) {
      router.push('/ingredients');
    }
  }, [hasCrust, router]);

  return (
    <div style={{ textAlign: "center", width: "100%", margin: "0 auto" }}>
      <h1>{name || "Customer"}, thank you for your order!</h1>

      <h3 style={{ marginTop: "30px" }}>{name || "Customer"}'s pizza:</h3>

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
      <p style={{ fontWeight: "bold", marginTop: "50px", color: "red" }}>Placeholder for API integration data</p>
    </div>
  );
}
