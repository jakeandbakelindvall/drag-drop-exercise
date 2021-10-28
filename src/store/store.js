import reducer from "./reducer";
import {
  ACTION_BUTTON,
  TEXT_BOX,
  STATIC_TEXT,
} from "../consts/drag-drop-consts";

import { createStore } from "redux";

export const defaultTray = [
  { id: "sign-up", type: STATIC_TEXT },
  { id: "first-name", type: TEXT_BOX },
  { id: "last-name", type: TEXT_BOX },
  { id: "email", type: TEXT_BOX },
  { id: "phone", type: TEXT_BOX },
  { id: "submit", type: ACTION_BUTTON },
];

const store = createStore(reducer, {
  tray: defaultTray,
  formBody: [],
});

export default store;
