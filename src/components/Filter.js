import React from 'react';

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    onCategoryChange(category);
  };

  return (
    <div className="Filter">
      <select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;