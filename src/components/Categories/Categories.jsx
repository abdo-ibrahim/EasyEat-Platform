import React, { useState } from "react";
import Category from "./Category";

const Categories = ({ setCurCat }) => {
  const [curId, setCurId] = useState(1); // Default to the first category
  const categories = [
    { id: 1, name: "Burger" },
    { id: 2, name: "Vegetarian" },
    { id: 3, name: "Meal" },
    { id: 4, name: "Chicken" },
  ];

  return (
    <div className="container">
      <div className="categories mt-20 mb-28 grid gap-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        {categories.map((cat) => (
          <Category
            key={cat.id}
            catId={cat.id}
            nameCat={cat.name}
            curId={curId}
            setCurId={setCurId}
            onClick={() => {
              setCurId(cat.id);
              setCurCat(cat.name.toLowerCase());
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
