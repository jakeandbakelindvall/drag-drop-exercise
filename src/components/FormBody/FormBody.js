import "./FormBody.css";

import Droppable from "../shared/Droppable";
import {
  ACTION_BUTTON,
  STATIC_TEXT,
  TEXT_BOX,
} from "../../consts/drag-drop-consts";

import PropTypes from "prop-types";

const FormBody = ({ children }) => {
  return (
    <Droppable
      accept={[ACTION_BUTTON, STATIC_TEXT, TEXT_BOX]}
      dropDest="formBody"
    >
      {() => {
        return <div className="form-body">{children}</div>;
      }}
    </Droppable>
  );
};

FormBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default FormBody;
