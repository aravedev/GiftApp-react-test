import React from "react";

export default function AddCategory({ onAddCategory }) {
  const [inputValue, setInputValue] = React.useState("");

  const onInputChange = (event) => {
    let data = event.target.value;
    setInputValue(data);
  };

  ////////////////////////////

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) {
      return;
    } else {
      // here we are using directly "setCategories" from the parent (useState), we are modifying in the child the array stored in GiftExperts
      //setCategories((prevState) => [inputValue, ...prevState]);

      onAddCategory(inputValue.trim());
      // Cleaning the input tag
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
