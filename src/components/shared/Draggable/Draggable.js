import "./Draggable.css";

import { drop } from "../../../store/actions";

import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import PropTypes from "prop-types";

const Draggable = ({ children, type, id }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag({
    type,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const result = monitor.getDropResult();
      if (!result) return;

      const { dropDest } = result;
      dispatch(drop({ dropDest, item, type }));
    },
  });

  return (
    <div className={clsx("draggable", { dragging: isDragging })} ref={drag}>
      {children()}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Draggable;
