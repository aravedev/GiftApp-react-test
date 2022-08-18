import React from "react";
/*
import AddCategory from "./componets/AddCategory";
import GiftGrid from "./componets/GiftGrid";
*/

import { AddCategory, GiftGrid } from "./componets";

export default function GiftExperApp() {
  const [categories, setCategories] = React.useState(["Toradora"]);

  const onAddCategory = (newGift) => {
    // Checking if the newGift entry already exists in categories array.

    if (categories.includes(newGift)) {
      return;
    } else {
      // Updating the state
      setCategories([newGift, ...categories]);
    }
  };

  return (
    <>
      <h1>GiftExperApp</h1>

      <AddCategory
        //setCategories={setCategories}
        onAddCategory={onAddCategory}
      ></AddCategory>

      {categories.map((category, i) => (
        // Passing category element as a prop
        <GiftGrid key={`cat${i + 1}`} category={category}></GiftGrid>
      ))}
    </>
  );
}
