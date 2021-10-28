import "./ActionButton.css";

import Draggable from "../../shared/Draggable";
import { ACTION_BUTTON } from "../../../consts/drag-drop-consts";

const ActionButton = () => {
  return (
    <Draggable dragConst={ACTION_BUTTON}>
      {(isDragging, isDropped) => {
        return <div className="action-button">action button! lol!</div>;
      }}
    </Draggable>
  );
};

export default ActionButton;
