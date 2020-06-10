import { FETCH_WEATHER, WEATHER_READY, FETCH_WEATHER_REJECTED, DISPLAY_CACHED, TENOR_READY, SWITCH_TENOR } from "../const";
import { fromJS, get } from "immutable";
import { parseResponse } from "../../utils/response-utils";
import { getGifUrl } from "../../utils/tenorUtils";

export const WEATHER_DISPLAY_REDUCER = "weatherDisplayReducer";

const initialWeatherState = fromJS({
  data: "empty",
  cityID: -1,
  cached: [],
  tenor: "empty",
  currTenor: "empty"
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
    } //TODO: nowy reducer odpowiedzialny za cache'owanie.
    case TENOR_READY: { // FIXME: zrobić tak by nie bugowało się to z cachowaniem
      console.log("ODP OD TENOR:", action.payload);
      return state.set('tenor', action.payload.results);
    }
    case SWITCH_TENOR: {
      const tenorsArr = state.get('tenor');
      console.log(getGifUrl(tenorsArr));
      return state.set('currTenor', getGifUrl(tenorsArr));
    }
    default:
      return state;
  }
};
