import "./Droppable.css";

import { hover } from "../../../store/actions";

import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import PropTypes from "prop-types";

const Droppable = ({ accept, dropDest, hovered, index, children }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept,
    drop: () => {
      return { dropDest, index };
    },
    // Alert store that this cell is being hovered and should be
    // highlighted accordingly
    hover: (_, monitor) => {
      if (monitor.isOver()) {
        dispatch(hover({ dropDest, index }));
      }
    },
  });

  return (
    <div className={clsx("droppable", { hovered })} ref={drop}>
      {children}
    </div>
  );
};

Droppable.defaultProps = {
  hovered: false,
};

Droppable.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  dropDest: PropTypes.string.isRequired,
  hovered: PropTypes.bool,
  index: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default Droppable;
