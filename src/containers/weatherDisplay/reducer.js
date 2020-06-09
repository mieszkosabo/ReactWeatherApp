import { FETCH_WEATHER, WEATHER_READY, FETCH_WEATHER_REJECTED, DISPLAY_CACHED } from "../const";
import { fromJS } from "immutable";
import { cityToID } from '../../utils/request-utils';
import { parseResponse } from "../../utils/response-utils";

export const WEATHER_DISPLAY_REDUCER = "weatherDisplayReducer";

const initialWeatherState = fromJS({
  data: "empty",
  cityID: -1,
  cached: [],
});

export const weatherDisplayReducer = (state = initialWeatherState, action) => {
  switch (action.type) {
    case FETCH_WEATHER: {
      return state.merge({data: "fetching!", cityID: action.payload});
    }
    case WEATHER_READY: {
      console.log(action.payload);
      const parsed = parseResponse(action.payload, state.get('cityID'));
      console.log("parsed in rdy:", parsed);
      return state
        .update("cached", (cached) => [...cached, parsed])
        .set("data", parsed);
    }
    case FETCH_WEATHER_REJECTED: {
      return state.set("data", "ERROR WHILE FETCHING");
    }
    case DISPLAY_CACHED: {
      return state.set("data", action.payload);
    }
    default:
      return state;
  }
};
