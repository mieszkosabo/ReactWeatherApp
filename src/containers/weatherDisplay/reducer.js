import { FETCH_WEATHER, WEATHER_READY, FETCH_WEATHER_REJECTED } from "../const";
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
    case FETCH_WEATHER_REJECTED: {
      return state.set("data", "ERROR WHILE FETCHING");
    }
    default:
      return state;
  }
};
