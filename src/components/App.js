import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handlingAddItems(newItem) {
    // console.log(newItem);
    setItems([...items, newItem]);
    // console.log(items);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* <Filter /> */}
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handlingAddItems} />
    </div>
  );
}

export default App;
