import reducer from "./reducer";
import {
  ACTION_BUTTON,
  TEXT_BOX,
  STATIC_TEXT,
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
  items: [{}, {}, {}, {}, {}, {}, {}, {}],
  hovered: -1,
};

const store = createStore(reducer, {
  tray: defaultTray,
  formBody: defaultFormBody,
});

export default store;
