import "./TextBox.css";

import Draggable from "../../shared/Draggable";
import { TEXT_BOX } from "../../../consts/drag-drop-consts";

const TextBox = () => {
  return (
    <Draggable dragConst={TEXT_BOX}>
      {(isDragging, isDropped) => {
        return <div className="text-box">text box! lmao!</div>;
      }}
    </Draggable>
  );
};

export default TextBox;
