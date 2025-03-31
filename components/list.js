import { useState } from "react";

function List() {
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

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
  const onSelectItem = (item) => {
    // Check if the item is already selected
    if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      // If it's already selected, remove it from the array
      setSelectedItems((prevItems) =>
        prevItems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      // If it's not selected, add it to the array
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  };

  // Calculate total price of selected items
  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  //style
  const liStyle = (isSelected) => ({
    fontSize: "medium",
    margin: "10px auto",
    listStyleType: "none",
    cursor: "pointer",
    color: isSelected ? "black" : "gray",
  });

  return (
    <div>
      <ul>
        {filteredItems.map((item) => (
          <li
            style={liStyle(selectedItems.some((selectedItem) => selectedItem.id === item.id))}
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

      <label style={{ display: "block" }}>
        <input
          type="checkbox"
          onChange={() => {
            setIsFilterChecked(!isFilterChecked);
          }}
          style={{ margin: "30px auto 10px", display: "inline" }}
        />{" "}
        Show only vegetarian toppings
      </label>

      {selectedItems.length > 0 && (
        <div>
          <h3 style={{ marginTop: "30px" }}>Selected Items:</h3>
          {selectedItems.map((item) => (
            <li style={liStyle(true)}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            </li>
          ))}
          <p>Total: ${calculateTotal()}</p>
        </div>
      )}
    </div>
  );
}

export default List;
