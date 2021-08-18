import Form from "react-bootstrap/Form";
import { textInputProps } from "../../constants";
const index = ({
  type = textInputProps.default.type,
  placeholder = textInputProps.default.placeholder,
  onChange,
  maxLength,
  label,
  name,
}) => {
  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default index;
