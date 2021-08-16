import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
const Category = () => {
  const [counter, setCounter] = useState(10);
  const [name, setName] = useState("");
  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CustomButton text={"increase"} onClick={handleClick} />
      <h2>{counter}</h2>

      <CustomInput onChange={handleChange} />
      <h2>{name}</h2>
    </div>
  );
};

export default Category;
