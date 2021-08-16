import Form from "react-bootstrap/Form";
import { textInputProps } from "../../constants";
const index = ({
  type = textInputProps.default.type,
  placeholder = textInputProps.default.placeholder,
  onChange,
}) => {
  return (
    <Form.Control type={type} placeholder={placeholder} onChange={onChange} />
  );
};

export default index;
