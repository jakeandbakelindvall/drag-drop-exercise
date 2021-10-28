import "./Tray.css";

import {
  ACTION_BUTTON,
  STATIC_TEXT,
  TEXT_BOX,
} from "../../consts/drag-drop-consts";
import Droppable from "../shared/Droppable";

import PropTypes from "prop-types";

const Tray = ({ children }) => {
  return (
    <Droppable accept={[ACTION_BUTTON, STATIC_TEXT, TEXT_BOX]} dropDest="tray">
      {() => {
        return <div className="tray">{children}</div>;
      }}
    </Droppable>
  );
};

Tray.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Tray;
