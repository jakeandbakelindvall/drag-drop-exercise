import reducer from "./reducer";
import {
  ACTION_BUTTON,
  TEXT_BOX,
  STATIC_TEXT,
  DROP_DEST_TRAY,
  DROP_DEST_FORM_BODY,
} from "../consts/drag-drop-consts";

import { createStore } from "redux";

export const defaultTray = {
  items: [
    { id: "sign-up", type: STATIC_TEXT },
    { id: "first-name", type: TEXT_BOX },
    { id: "last-name", type: TEXT_BOX },
    { id: "email", type: TEXT_BOX },
    { id: "phone", type: TEXT_BOX },
    { id: "submit", type: ACTION_BUTTON },
  ],
  hovered: -1,
};

export const defaultFormBody = {
  items: [
    { id: "", type: "" },
    { id: "", type: "" },
    { id: "", type: "" },
    { id: "", type: "" },
    { id: "", type: "" },
    { id: "", type: "" },
    { id: "", type: "" },
    { id: "", type: "" },
  ],
  hovered: -1,
};

const store = createStore(reducer, {
  [DROP_DEST_TRAY]: defaultTray,
  [DROP_DEST_FORM_BODY]: defaultFormBody,
});

export default store;
