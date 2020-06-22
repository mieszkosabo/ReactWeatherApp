import { API_KEY } from "./consts";
import { citiesList } from "../assets";

export const createAPICallCoordinates = (lat, lon, exclude) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${API_KEY}`;

export const createAPICallCity = (city_id, exclude) => {
  const { lat, lon } = IDToCoordinates(city_id);
  return createAPICallCoordinates(lat, lon, exclude);
};

export const cityToID = (cityName) => {
  const city = citiesList.find(
    (city) => city.name.toUpperCase() === cityName.toUpperCase()
  );
  if (city === undefined) {
    throw "city not on the list!";
  }
  return city.id;
};

const IDToCoordinates = (city_id) => {
  const city = citiesList.find((city) => city.id === city_id);
  return { lat: city.coord.lat, lon: city.coord.lon };
};
