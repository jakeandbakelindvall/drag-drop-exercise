import { DRAG, DROP } from "./types";

const reducer = (state = {}, action) => {
  switch (action.type) {
    // Not implemented - but could be!
    case DRAG:
      return state;
    // Add item to `dropDest` array and remove globally
    // from all other arrays tracking darg/drop locations
    case DROP:
      const { dropDest, item, type } = action.payload;

      const newState = {
        tray: [...state.tray],
        formBody: [...state.formBody],
      };

      // Do not add if already in `dropDest` array
      if (newState[dropDest].some((i) => i.id === item.id)) return newState;

      newState[dropDest].push({ id: item.id, type });
      Object.keys(newState).forEach((k) => {
        if (k === dropDest) return;
        newState[k] = state[k].filter((i) => i.id !== item.id);
      });

      return newState;
    default:
      return state;
  }
};

export default reducer;
