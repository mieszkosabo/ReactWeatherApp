import { FETCH_WEATHER, WEATHER_READY, EMPTY_TERM } from "../const";
import { fromJS } from "immutable";

const initialWeatherState = fromJS({
  data: "empty",
});

export const weatherDisplayReducer = (state = initialWeatherState, action) => {
  switch (action.type) {
    case FETCH_WEATHER: {
      return state.set("data", "fetching!");
    }
    case WEATHER_READY: {
      return state.set("data", action.payload);
    }
    default:
      return state;
  }
};
