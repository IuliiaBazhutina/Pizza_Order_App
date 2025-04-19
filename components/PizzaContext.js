import { createContext, useState, useContext } from "react";
import { useBusinessHours } from "./time";

// Create context for overall pizza order
export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const { isBusinessHours } = useBusinessHours();

  // Crust verification
  // Check if user has selected a crust before allowing checkout options
  const hasCrust = () => {
    return selectedToppings.some(
      (item) => item.name === "Classic Crust" || item.name === "Whole Wheat Crust"
    );
  };

  // Check if order can proceed
  const canOrder = () => {
    return isBusinessHours && hasCrust();
  };

  // Calculate total price of selected items
  const calculateTotal = () => {
    if (!hasCrust()) {
      return (
        <small style={{ color: "red" }}>
          <br />
          Please select a crust.
        </small>
      );
    }
    if (!isBusinessHours) {
      return (
        <small style={{ color: "red" }}>
          <br />
          We are closed. <br />
          Hours: 10 AM - 11 PM
        </small>
      );
    }
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
        hasCrust,
        canOrder,
        isBusinessHours,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

// Hook to use the pizza context
export const usePizza = () => useContext(PizzaContext);
