import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
import CustomButton from "./components/CustomButton";
import { bootstrapButtonVariant, buttonTexts } from "./constants";
const App = () => {
  return (
    <div>
      <CustomButton
        color={bootstrapButtonVariant.success}
        text={buttonTexts.success}
      />{" "}
      <br></br>
      <br></br>
      <CustomButton
        color={bootstrapButtonVariant.outlineWarning}
        text={buttonTexts.outlineWarning}
      />
    </div>
  );
};

export default App;
