import "./ActionButton.css";

import Draggable from "../../shared/Draggable";
import { ACTION_BUTTON } from "../../../consts/drag-drop-consts";

import PropTypes from "prop-types";

const ActionButton = ({ id }) => {
  return (
    <Draggable type={ACTION_BUTTON} id={id}>
      {(isUsable) => {
        return <div className="action-button">action button! lol!</div>;
      }}
    </Draggable>
  );
};

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ActionButton;
