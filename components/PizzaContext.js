import { createContext, useState, useContext } from "react";
import toppings from "./toppings";

// Create context for overall pizza order
export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [selectedToppings, setSelectedToppings] = useState([toppings[10]]);

  // Calculate total price of selected items
  const calculateTotal = () => {
    return selectedToppings.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Add or remove toppings
  const toggleTopping = (topping) => {
    // Check if the item is already selected
    if (selectedToppings.some((selectedItem) => selectedItem.id === topping.id)) {
      // If it's already selected, remove it from the array
      setSelectedToppings((prevItems) =>
        prevItems.filter((selectedItem) => selectedItem.id !== topping.id)
      );
    } else {
      // If it's not selected, add it to the array
      setSelectedToppings((prevItems) => [...prevItems, topping]);
    }
  };

  return (
    <PizzaContext.Provider
      value={{
        selectedToppings,
        setSelectedToppings,
        toggleTopping,
        calculateTotal,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

// Hook to use the pizza context
export const usePizza = () => useContext(PizzaContext);
