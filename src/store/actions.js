import { DRAG, DROP } from "./types";

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
