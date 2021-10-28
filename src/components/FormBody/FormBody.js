import "./FormBody.css";

import Droppable from "../shared/Droppable/Droppable";
import {
  ACTION_BUTTON,
  STATIC_TEXT,
  TEXT_BOX,
} from "../../consts/drag-drop-consts";

const FormBody = () => {
  return (
    <Droppable acceptDropConsts={[ACTION_BUTTON, STATIC_TEXT, TEXT_BOX]}>
      {() => {
        return <div className="form-body"></div>;
      }}
    </Droppable>
  );
};

export default FormBody;
