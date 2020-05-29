import { FETCH_WEATHER, WEATHER_READY, FETCH_WEATHER_REJECTED } from "../const";
import { fromJS } from "immutable";
import { cityToID } from '../../utils/request-utils';

export const WEATHER_DISPLAY_REDUCER = "weatherDisplayReducer";

const initialWeatherState = fromJS({
  data: "empty",
  cityID: -1,
});

export const weatherDisplayReducer = (state = initialWeatherState, action) => {
  switch (action.type) {
    case FETCH_WEATHER: {
      console.log("city to id: " + cityToID(action.payload));
      return state.merge({data: "fetching!", cityID: cityToID(action.payload)});
    }
    case WEATHER_READY: {
      console.log(action.payload);
      return state.set("data", action.payload);
    }
    case FETCH_WEATHER_REJECTED: {
      return state.set("data", "ERROR WHILE FETCHING");
    }
    default:
      return state;
  }
};
