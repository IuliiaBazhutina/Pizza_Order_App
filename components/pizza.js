import { useState } from "react";
import Toppings from "./toppings";
import styles from "@/styles/Pizza.module.css";

const Pizza = ({ isOnPizza }) => {
  const [onPizza, setOnPizza] = useState([]);

  // const filterToppings = isOnPizza ? toppinglist.filter((img) => img.onPizza) : Toppings;
  return (
    <div>
      {Toppings.toReversed().map(({ name, src, id }) => (
        <img key={id.id} src={src.src} alt={name} className={styles.img} />
      ))}
    </div>
  );
};
export default Pizza;
