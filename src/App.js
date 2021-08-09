import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
const App = () => {
  return <h2>{toUpperCase(STATIC_HELLO)}</h2>;
};

export default App;
