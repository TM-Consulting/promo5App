import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { textInputProps, buttonTexts } from "../../constants";
import "./index.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case textInputProps.email.name:
        setEmail(e.target.value);
        break;
      case textInputProps.password.name:
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const emailProps = {
    ...textInputProps.email,
    onChange: handleChange,
  };
  const passwordProps = {
    ...textInputProps.password,
    onChange: handleChange,
  };
  return (
    <div className="container">
      <CustomInput {...emailProps} />
      <CustomInput {...passwordProps} />
      <div className="submit-btn">
        <CustomButton text={buttonTexts.submit} />
      </div>

      <div>
        <h2>informations</h2>
        email: {email} <br></br>
        password :{password}
      </div>
    </div>
  );
};

export default Login;
