import "./Droppable.css";

import { useDrop } from "react-dnd";

import clsx from "clsx";
import PropTypes from "prop-types";

const Droppable = ({ children, acceptDropConsts }) => {
  const accept = acceptDropConsts.map((adc) => adc.type);

  const [, drop] = useDrop({
    accept,
    drop: () => console.log("😎"),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className={clsx("droppable")} ref={drop}>
      {children()}
    </div>
  );
};

Droppable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  acceptDropConsts: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Droppable;
