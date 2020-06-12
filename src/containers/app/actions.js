import { TOGGLE_THEME, FETCH_STATE } from "./consts";

export const toggleAction = () => ({
  type: TOGGLE_THEME,
});

export const fetchState = () => ({
  type: FETCH_STATE,
})