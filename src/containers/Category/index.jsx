import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { PARAGRAPH_TO_TYPE } from "../../constants";
import { stringCompare } from "../../utils/stringUtils";
const Category = () => {
  const [counter, setCounter] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    const inputVal = event.target.value;

    // inputVal.split("").map((letter, index) => {
    //   if (
    //     !stringCompare(letter, PARAGRAPH_TO_TYPE.charAt(index)) &&
    //     index > lastIndex
    //   ) {
    //     console.log("testtt mamsawyinch");
    //     setCounter(counter + 1);
    //     setLastIndex(index);
    //   }
    // });

    const inputChar = inputVal.charAt(inputVal.length - 1);
    console.log(
      "testtt",
      inputChar,
      PARAGRAPH_TO_TYPE.charAt(inputVal.length - 1)
    );
    if (
      !stringCompare(inputChar, PARAGRAPH_TO_TYPE.charAt(inputVal.length - 1))
    ) {
      console.log("testtt mamsawyinch");
      setCounter(counter + 1);
    }
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
      <h1>{lastIndex}</h1>
    </div>
  );
};

export default Category;
