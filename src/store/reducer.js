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

      // Do not add dupe if already in given `dropDest` array
      if (state[dropDest].items.some((x) => x.id === item.id)) return state;

      const newState = {
        tray: { items: [...state.tray.items], hovered: -1 },
        formBody: { items: [...state.formBody.items], hovered: -1 },
      };

      newState[dropDest].items[index] = { id: item.id, type };
      Object.keys(newState).forEach((k) => {
        // Don't want to wipe newly modified entry!
        if (k === dropDest) return;
        newState[k].items = newState[k].items.map((x) => {
          return x.id !== item.id ? x : {};
        });
      });

      return newState;
    }
    // For knowledge of where a draggable is about to be dropped -
    // useful in styling. Can be dispatched with no destination, in which case
    // the hovered index is cleared everywhere
    case HOVER: {
      const { dropDest, index } = action.payload;

      const newState = {
        tray: { items: [...state.tray.items], hovered: -1 },
        formBody: { items: [...state.formBody.items], hovered: -1 },
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
