import {
  DROP_DEST_TRAY,
  DROP_DEST_FORM_BODY,
} from "../consts/drag-drop-consts";
import { DRAG, DROP, HOVER } from "./types";

const reducer = (state = {}, action) => {
  switch (action.type) {
    // Not implemented - but could be!
    case DRAG: {
      return state;
    }
    // Insert item into given `dropDest` array and remove (blank out but leave in-place)
    // from all other possible arrays tracking drag/drop locations
    case DROP: {
      const { dropDest, index, item, type } = action.payload;

      // Cannot drop onto something already there
      if (state[dropDest].items[index].id) {
        return state;
      }

      const newState = {
        [DROP_DEST_TRAY]: {
          items: [...state[DROP_DEST_TRAY].items],
          hovered: -1,
        },
        [DROP_DEST_FORM_BODY]: {
          items: [...state[DROP_DEST_FORM_BODY].items],
          hovered: -1,
        },
      };

      Object.keys(newState).forEach((k) => {
        if (k === dropDest) {
          // Set new location for this item=
          newState[k].items[index] = { id: item.id, type };
          // Now, clear dupe if dropped into same `dropDest` array
          newState[k].items = newState[k].items.map((x, i) => {
            return x.id === item.id && i !== index ? { id: "", type: "" } : x;
          });
        } else {
          // Remove from old location
          newState[k].items = newState[k].items.map((x) => {
            return x.id !== item.id ? x : { id: "", type: "" };
          });
        }
      });

      return newState;
    }
    // For knowledge of where a draggable is about to be dropped -
    // useful in styling. Can be dispatched with no destination, in which case
    // the hovered index is cleared everywhere
    case HOVER: {
      const { dropDest, index } = action.payload;

      const newState = {
        [DROP_DEST_TRAY]: {
          items: [...state[DROP_DEST_TRAY].items],
          hovered: -1,
        },
        [DROP_DEST_FORM_BODY]: {
          items: [...state[DROP_DEST_FORM_BODY].items],
          hovered: -1,
        },
      };

      if (!dropDest) {
        Object.keys(newState).forEach((k) => {
          newState[k].hovered = -1;
        });
      } else {
        newState[dropDest].hovered = index;
      }

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
