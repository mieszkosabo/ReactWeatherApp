import { FETCH_WEATHER, WEATHER_READY, EMPTY_TERM } from '../const';
import { fromJS } from 'immutable';

const initialWeatherState = fromJS({ data: EMPTY_TERM }); //TODO: ogarnąć coś innego

export const weatherDisplayReducer = (state = initialWeatherState, action) => {
    switch (action.type) {
        case FETCH_WEATHER: {
            console.log("ayy");
            return state.setIn(['data'], "fetching...");
        }
        case WEATHER_READY: {
            return state.setIn(['data'], action.payload);
        }
        default:
            return state;
    }
};

