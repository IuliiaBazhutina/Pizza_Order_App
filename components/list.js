import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/List.module.css";
import { usePizza } from "./PizzaContext";

function List() {
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const { selectedToppings, toggleTopping, calculateTotal, hasCrust } = usePizza();

  const items = [
    { id: 1, name: "Basil", vegetarian: true, price: 1.5 },
    { id: 2, name: "Spinach", vegetarian: true, price: 1.5 },
    { id: 3, name: "Tomato", vegetarian: true, price: 2.5 },
    { id: 4, name: "Ham", vegetarian: false, price: 4.5 },
    { id: 5, name: "Mushrooms", vegetarian: true, price: 3.5 },
    { id: 6, name: "Pepperoni", vegetarian: false, price: 5.0 },
    { id: 7, name: "Mozzarella", vegetarian: true, price: 3.0 },
    { id: 8, name: "Cheddar", vegetarian: true, price: 2.5 },
    { id: 9, name: "Classic Sauce", vegetarian: true, price: 0.5 },
    { id: 10, name: "BBQ Sauce", vegetarian: true, price: 1.0 },
    { id: 11, name: "Classic Crust", vegetarian: true, price: 0.5 },
    { id: 12, name: "Whole Wheat Crust", vegetarian: true, price: 1.0 },
  ];

  //filtered list
  const filteredItems = isFilterChecked ? items.filter((item) => item.vegetarian) : items;

  // Function to handle item click and toggle selection
  // Uses Pizza Context
  // also ensures only one crust can be selected at a time
  const onSelectItem = (item) => {
    // Check if the clicked item is a crust
    const isCrust = item.name.includes("Crust");
    if (isCrust) {
      // Remove any existing crust from selectedToppings
      const existingCrust = selectedToppings.find((topping) => topping.name.includes("Crust"));

      if (existingCrust) {
        // If clicked crust is different from existing crust, remove existing and add new
        if (existingCrust.id !== item.id) {
          toggleTopping(existingCrust); // Remove existing crust
          toggleTopping(item); // Add new crust
        } else {
          // If same crust clicked, just toggle it
          toggleTopping(item);
        }
      } else {
        // No crust selected, just add the new one
        toggleTopping(item);
      }
    } else {
      // Not a crust, handle normally
      toggleTopping(item);
    }
  };

  //style
  const liStyle = (isSelected) => ({
    fontSize: "medium",
    margin: "10px auto",
    listStyleType: "none",
    cursor: "pointer",
    color: isSelected ? "var(--dark)" : "var(--darkest)",
  });

  return (
    <div>
      <div className={styles.toppings}>
        <ul className={styles.list}>
          {filteredItems.map((item) => (
            <li
              style={liStyle(selectedToppings.some((selectedItem) => selectedItem.id === item.id))}
              key={item.id}
              onClick={() => onSelectItem(item)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            </li>
          ))}
        </ul>

        <label style={{ display: "block" }} className={styles.filters}>
          <input
            type="checkbox"
            onChange={() => {
              setIsFilterChecked(!isFilterChecked);
            }}
            style={{ display: "inline" }}
          />{" "}
          Show only vegetarian toppings
        </label>
      </div>

      <div className={styles.total}>
        <p>Total: ${calculateTotal()}</p>
        {selectedToppings.length > 0 && hasCrust() && (
          <Link href="./delivery">
            <span>Checkout</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default List;
