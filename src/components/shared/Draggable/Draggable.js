import "./Draggable.css";

import { drop, hover } from "../../../store/actions";

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
    // Cancel any hover tracking in store, do nothing if
    // dropped in an invalid spot, but otherwise,
    // alert store of new location for item
    end: (item, monitor) => {
      dispatch(hover({ dropDest: null, index: -1 }));
      const result = monitor.getDropResult();
      if (!result) return;

      const { dropDest, index } = result;
      dispatch(drop({ dropDest, index, item, type }));
    },
  });

  return (
    <div className={clsx("draggable", { dragging: isDragging })} ref={drag}>
      {children}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Draggable;
