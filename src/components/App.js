import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"; // Assuming you have a Header component
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleCategoryChange = (category)  => {
    return (item) => ({
      ...item,
      category: category
    })
  };

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header darkMode={isDarkMode} onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
