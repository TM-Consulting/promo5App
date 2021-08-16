import Button from "react-bootstrap/Button";
import { buttonTexts, MAX_PERSON_LIST } from "../../constants";

const index = ({ onClick, color, text = buttonTexts.success }) => {
  return (
    <Button onClick={onClick} variant={color}>
      {text}
    </Button>
  );
};

export default index;
