import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { PARAGRAPH_TO_TYPE } from "../../constants";
import { stringCompare, stringsCharDiff } from "../../utils/stringUtils";
const Category = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    setCounter(stringsCharDiff(event.target.value, PARAGRAPH_TO_TYPE));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2> please type: {PARAGRAPH_TO_TYPE}</h2>
      {/* <CustomButton text={"increase"} onClick={handleClick} /> */}

      <CustomInput
        onChange={handleChange}
        maxLength={PARAGRAPH_TO_TYPE.length}
      />
      <h2>You type: {name}</h2>

      <h2> Wrong Letter: {counter}</h2>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Category;
