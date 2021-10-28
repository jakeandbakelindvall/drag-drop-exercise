import "./Tray.css";

import Droppable from "../shared/Droppable";
import {
  ACTION_BUTTON,
  STATIC_TEXT,
  TEXT_BOX,
} from "../../consts/drag-drop-consts";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Tray = ({ children }) => {
  const dropDest = "tray";
  const hoveredIndex = useSelector((store) => store[dropDest].hovered);

  return (
    <div className="tray">
      {children.map((child, i) => {
        return (
          <Droppable
            accept={[ACTION_BUTTON, STATIC_TEXT, TEXT_BOX]}
            dropDest={dropDest}
            hovered={hoveredIndex === i}
            index={i}
            key={i}
          >
            {child}
          </Droppable>
        );
      })}
    </div>
  );
};

Tray.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Tray;
