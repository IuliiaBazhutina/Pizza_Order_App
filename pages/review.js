import { PizzaContext, usePizza } from "@/components/PizzaContext";
import { createContext, useState, useContext } from "react";
import { PizzaProvider } from "@/components/PizzaContext";
import { useRouter } from 'next/router';
import styles from "@/styles/review.module.css";

export default function Account() {

  const { selectedToppings } = useContext(PizzaContext);


  const { calculateTotal } = useContext(PizzaContext); // Access the function from context

  const handleCalculateTotal = () => {
    calculateTotal();
  };

  const router = useRouter();
  const { data } = router.query;

  // filter to select specific toppings by id
  // for setting default selections and proper layering


  return (

    <div>
      <h1>Thank you for your order!</h1>

      <h3 style={{ marginTop: '30px' }}>You chose the next toppings:</h3>

      <div className={styles.toppings}>



        <ul className={styles.list}>
          {selectedToppings.map((item) => (


            <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}          
          <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
            <span style={{fontWeight: 'bolder', marginTop: '10px'}}>Total:</span>
            <span  style={{fontWeight: 'bolder', marginTop: '10px'}}> ${calculateTotal()}</span>
          </div> </ul>

      </div>
      <p style={{fontWeight: 'bold', marginTop: '30px'}}>{data}</p>
    </div>
  );
}

