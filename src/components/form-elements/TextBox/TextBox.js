import "./TextBox.css";

import Draggable from "../../shared/Draggable";
import { TEXT_BOX } from "../../../consts/drag-drop-consts";

import PropTypes from "prop-types";

const TextBox = ({ disabled, placeholder, id }) => {
  return (
    <Draggable type={TEXT_BOX} id={id}>
      <input
        className="text-box"
        disabled={disabled}
        placeholder={placeholder}
      ></input>
    </Draggable>
  );
};

TextBox.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
};

TextBox.defaultProps = {
  disabled: false,
  placeholder: "",
};

export default TextBox;
