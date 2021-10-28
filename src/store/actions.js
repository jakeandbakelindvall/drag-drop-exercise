import { DRAG, DROP, HOVER } from "./types";

export const drag = (payload) => {
  return {
    type: DRAG,
    payload,
  };
};

export const drop = (payload) => {
  return {
    type: DROP,
    payload,
  };
};

export const hover = (payload) => {
  return {
    type: HOVER,
    payload,
  };
};
