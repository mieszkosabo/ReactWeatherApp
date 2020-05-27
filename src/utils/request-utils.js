import { API_KEY } from "./consts";
import { citiesList } from "../assets";

export const createAPICallCoordinates = (lat, lon, exclude) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}`;

export const createAPICallCity = (cityName, exclude) => {
  const { lat, lon } = cityToCoordinates(cityName);
  return createAPICallCoordinates(lat, lon, exclude);
};

const cityToCoordinates = (cityName) => {
  const city = citiesList.find((city) => city.name.toUpperCase() === cityName.toUpperCase());
  return { lat: city.coord.lat, lon: city.coord.lon };
};
