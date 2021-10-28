import "./ActionButton.css";

import Draggable from "../../shared/Draggable";
import { ACTION_BUTTON } from "../../../consts/drag-drop-consts";

import clsx from "clsx";
import PropTypes from "prop-types";

const ActionButton = ({ color, disabled, onClick, text, id }) => {
  return (
    <Draggable type={ACTION_BUTTON} id={id}>
      <button
        className={clsx("action-button", color + (disabled ? "-disabled" : ""))}
        onClick={disabled ? () => {} : onClick}
      >
        {text}
      </button>
    </Draggable>
  );
};

ActionButton.propTypes = {
  color: PropTypes.oneOf(["red", "green", "blue"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
};

ActionButton.defaultProps = {
  color: "blue",
  disabled: false,
  onClick: () => alert("button press 😎"),
  text: "BUTTON",
};

export default ActionButton;
