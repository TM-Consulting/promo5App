import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import {
  textInputProps,
  buttonTexts,
  credentialsState,
  authUser,
} from "../../constants";
import { stringCompare } from "../../utils/stringUtils";
import "./index.css";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [clickAction, setClickAction] = useState(false);
  const handleChange = (e) => {
    switch (e.target.name) {
      case textInputProps.email.name:
        setCredentials({
          ...credentials,
          email: e.target.value,
        });
        break;
      case textInputProps.password.name:
        setCredentials({
          ...credentials,
          password: e.target.value,
        });
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
  const handleClick = () => {
    if (
      !stringCompare(credentials.email, authUser.email) ||
      !stringCompare(credentials.password, authUser.password)
    ) {
      setError(true);
      setClickAction(true);
    } else {
      setError(false);
      setClickAction(true);
    }
  };
  const showConfirmation = () =>
    clickAction ? (
      error ? (
        <h2 className="error">{credentialsState.error}</h2>
      ) : (
        <h2 className="success">{credentialsState.success}</h2>
      )
    ) : (
      ""
    );

  // conditional rendering
  return (
    <div className="container">
      <CustomInput {...emailProps} />
      <CustomInput {...passwordProps} />
      <div className="submit-btn">
        <CustomButton text={buttonTexts.submit} onClick={handleClick} />
      </div>
      {showConfirmation()}
    </div>
  );
};

export default Login;
