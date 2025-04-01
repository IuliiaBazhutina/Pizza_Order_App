import { usePizza } from "./PizzaContext";
import Toppings from "./toppings";
import styles from "@/styles/Pizza.module.css";

const Pizza = () => {
  const { selectedToppings } = usePizza();

  // filter to select specific toppings by id
  // for setting default selections and proper layering
  const defaultToppings = selectedToppings.map((item) => item.id);

  return (
    <div>
      {
        // Require a crust, default to classic if none selected //
        // Crust on bottom //
        (defaultToppings.includes(11) ||
          defaultToppings.includes(12) ||
          defaultToppings.length === 0) && (
          <img
            src={defaultToppings.includes(12) ? Toppings[11].src.src : Toppings[10].src.src}
            alt="Crust"
            className={styles.img}
          />
        )
      }

      {
        // Sauce layer next //
        defaultToppings.includes(9) && (
          <img src={Toppings[8].src.src} alt="Classic Sauce" className={styles.img} />
        )
      }
      {defaultToppings.includes(10) && (
        <img src={Toppings[9].src.src} alt="BBQ Sauce" className={styles.img} />
      )}

      {
        // Map through all toppings (except crusts and sauces) //
        // display only selected //
        Toppings.toReversed().map((topping) => {
          // Skip crusts and sauces //
          if (![9, 10, 11, 12].includes(topping.id)) {
            return defaultToppings.includes(topping.id) ? (
              <img
                key={topping.id}
                src={topping.src.src}
                alt={topping.name}
                className={styles.img}
              />
            ) : null;
          }
          return null;
        })
      }
    </div>
  );
};
export default Pizza;
