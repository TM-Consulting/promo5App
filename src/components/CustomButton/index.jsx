import Button from "react-bootstrap/Button";
import { buttonTexts, MAX_PERSON_LIST } from "../../constants";

const index = ({ color, text = buttonTexts.success }) => {
  return <Button variant={color}>{text}</Button>;
};

export default index;
