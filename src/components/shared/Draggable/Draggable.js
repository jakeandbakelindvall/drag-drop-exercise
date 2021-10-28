import "./Draggable.css";

import { useState } from "react";
import { useDrag } from "react-dnd";

import clsx from "clsx";
import PropTypes from "prop-types";

const Draggable = ({ children, dragConst }) => {
  const { type, item } = dragConst;

  const [isDropped, setIsDropped] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type,
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (_, monitor) => {
      setIsDropped(monitor.didDrop());
    },
  });

  return (
    <div className={clsx("draggable", { dragging: isDragging })} ref={drag}>
      {children(isDragging, isDropped)}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.func.isRequired,
  dragConst: PropTypes.shape({
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Draggable;
