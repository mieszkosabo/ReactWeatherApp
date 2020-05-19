import { INPUT_CHANGE, FETCH_WEATHER } from '../const';

export const changeInput = (newTerm) => ({
    type: INPUT_CHANGE,
    newTerm
});

export const fetchWeather = () => ({
  type: FETCH_WEATHER
});