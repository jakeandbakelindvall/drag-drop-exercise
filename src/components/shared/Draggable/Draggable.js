import "./Draggable.css";

import { drop } from "../../../store/actions";

import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import PropTypes from "prop-types";

const Draggable = ({ children, type, id }) => {
  const dispatch = useDispatch();
  const [isUsable, setIsUsable] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const result = monitor.getDropResult();
      if (!result) return;

      dispatch(drop({ dropDest: result.dropDest, item, type }));
      setIsUsable(monitor.getDropResult().dropDest === "formBody");
    },
  });

  return (
    <div className={clsx("draggable", { dragging: isDragging })} ref={drag}>
      {children({ isUsable })}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Draggable;
