import "./StaticText.css";

import Draggable from "../../shared/Draggable";
import { STATIC_TEXT } from "../../../consts/drag-drop-consts";

import clsx from "clsx";
import PropTypes from "prop-types";

const StaticText = ({ bold, text, titleCase }) => {
  return (
    <Draggable dragConst={STATIC_TEXT}>
      {(isDragging, isDropped) => {
        return (
          <div
            className={clsx("static-text", { bold, "title-case": titleCase })}
          >
            {text}
          </div>
        );
      }}
    </Draggable>
  );
};

StaticText.propTypes = {
  bold: PropTypes.bool,
  text: PropTypes.string.isRequired,
  titleCase: PropTypes.bool,
};

StaticText.defaultProps = {
  bold: false,
  titleCase: false,
};

export default StaticText;
