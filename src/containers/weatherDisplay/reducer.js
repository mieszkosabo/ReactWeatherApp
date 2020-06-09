import { FETCH_WEATHER, WEATHER_READY, FETCH_WEATHER_REJECTED, DISPLAY_CACHED, TENOR_READY } from "../const";
import { fromJS } from "immutable";
import { parseResponse } from "../../utils/response-utils";

export const WEATHER_DISPLAY_REDUCER = "weatherDisplayReducer";

const initialWeatherState = fromJS({
  data: "empty",
  cityID: -1,
  cached: [],
  tenor: "empty"
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
    case TENOR_READY: { // TODO: zrobić tak by nie bugowało się to z cachowaniem
      console.log("ODP OD TENOR:", action.payload);
      return state.set('tenor', action.payload.results);
    }
    default:
      return state;
  }
};
