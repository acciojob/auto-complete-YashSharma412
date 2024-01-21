import React from "react";
import { useState, useEffect } from "react";

function SearchList() {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [filteredFruits, setFilteredFruits] = useState(fruits);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.length > 0) {
      setFilteredFruits(fruits.filter((fruit) => fruit.includes(searchText)));
    } else {
        setFilteredFruits(fruits);
    }
  }, [searchText]);

  return (
    <div>
      <h1>Search item</h1>
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value.trim())}
        value={searchText}
      />
      <ul>
        {filteredFruits.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default SearchList;
