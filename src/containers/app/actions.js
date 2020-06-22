import { TOGGLE_THEME, SWITCH_FORECAST } from "./consts";

export const toggleAction = () => ({
  type: TOGGLE_THEME,
});

export const switchForecast = () => ({
  type: SWITCH_FORECAST,
});
