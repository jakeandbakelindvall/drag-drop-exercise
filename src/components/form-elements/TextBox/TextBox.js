import "./TextBox.css";

import Draggable from "../../shared/Draggable";
import { TEXT_BOX } from "../../../consts/drag-drop-consts";

import PropTypes from "prop-types";

const TextBox = ({ id }) => {
  return (
    <Draggable type={TEXT_BOX} id={id}>
      {(isUsable) => {
        return <div className="text-box">text box! lmao!</div>;
      }}
    </Draggable>
  );
};

TextBox.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TextBox;
