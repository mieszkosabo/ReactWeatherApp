import { FETCH_WEATHER, WEATHER_READY, FETCH_WEATHER_REJECTED, DISPLAY_CACHED, TENOR_READY, SWITCH_TENOR, DISPLAY_CACHED_TENOR, FETCH_GEO } from "../const";
import { fromJS, get } from "immutable";
import { parseResponse } from "../../utils/response-utils";
import { getGifUrl } from "../../utils/tenorUtils";
import { cityToID } from "../../utils/request-utils";

export const WEATHER_DISPLAY_REDUCER = "weatherDisplayReducer";

const initialWeatherState = fromJS({
  data: "empty",
  cityID: -1,
  tenor: "empty",
  currTenor: undefined,
  cachedWeather: [],
  cachedTenor: [],
});

export const weatherDisplayReducer = (state = initialWeatherState, action) => {
  switch (action.type) {
    case FETCH_WEATHER: {
      return state.merge({data: "fetching!", cityID: action.payload});
    }
    case WEATHER_READY: {
      const parsed = parseResponse(action.payload, state.get('cityID'));
      return state
        .update("cachedWeather", (cached) => [...cached, parsed])
        .set("data", parsed);
    }
    case FETCH_GEO: {
      return state.set("cityID", -1);
    }
    case FETCH_WEATHER_REJECTED: {
      return state.set("data", "ERROR WHILE FETCHING");
    }
    case DISPLAY_CACHED: {
      return state.set("data", action.payload);
    }
    case DISPLAY_CACHED_TENOR: {
      return state.set("tenor", action.payload.tenor);
    }
    case TENOR_READY: {
      console.log("ODP OD TENOR:", action.payload);
      return state
        .set('tenor', action.payload.results)
        .set('currTenor', getGifUrl(action.payload.results))
        .update("cachedTenor", (cached) => 
          [
            ...cached,
            {
              cityID: state.get('cityID'),
              tenor: action.payload.results
            },
          ]
        );
    }
    case SWITCH_TENOR: {
      const tenorsArr = state.get('tenor');
      return state.set('currTenor', getGifUrl(tenorsArr));
    }
    default:
      return state;
  }
};
