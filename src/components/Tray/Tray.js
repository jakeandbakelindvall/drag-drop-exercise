import "./Tray.css";

import PropTypes from "prop-types";

const Tray = ({ children }) => {
  return <div className="tray">{children}</div>;
};

Tray.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Tray;
