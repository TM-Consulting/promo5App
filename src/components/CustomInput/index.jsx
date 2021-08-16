import Form from "react-bootstrap/Form";
import { textInputProps } from "../../constants";
const index = ({
  type = textInputProps.default.type,
  placeholder = textInputProps.default.placeholder,
  onChange,
  maxLength,
}) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default index;
