import "./Droppable.css";

import { useDrop } from "react-dnd";
import clsx from "clsx";
import PropTypes from "prop-types";

const Droppable = ({ children, accept, dropDest }) => {
  const [, drop] = useDrop({
    accept,
    drop: () => {
      return { dropDest };
    },
  });

  return (
    <div className={clsx("droppable")} ref={drop}>
      {children()}
    </div>
  );
};

Droppable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  accept: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  dropDest: PropTypes.string.isRequired,
};

export default Droppable;
