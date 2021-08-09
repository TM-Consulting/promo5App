import Button from "react-bootstrap/Button";

const index = (props) => {
  return <Button variant={props.color}>{props.text}</Button>;
};
export default index;
