import { dayNames } from "./consts";
import { curry, pipe } from "rambda";
import { weatherNiceStatus } from "./niceWeather";
export const sample = require("./sample_response.json");

const convertUnixDatastamp = (arg, dt) => {
  const date = new Date(dt * 1000);
  if (arg === "day") {
    return date.getDay();
  }
  if (arg == "hour") {
    return date.getHours();
  }
};

const curriedConverter = curry(convertUnixDatastamp);

const dayConverter = pipe(curriedConverter("day"), (day) => dayNames[day]);
const hourConverter = pipe(curriedConverter("hour"), (hour) => `${hour}:00`);

export const parseResponse = (sample, id) => {
  const parsed = { cityID: id };

  parsed.daily = sample.daily.map((day) => ({
    day: dayConverter(day.dt),
    minTemp: Math.round(day.temp.min),
    maxTemp: Math.round(day.temp.max),
    avgTemp: Math.round((day.temp.min + day.temp.max) / 2),
    description: day.weather[0].description,
    main: day.weather[0].main,
  }));

  parsed.niceStatus = {
    daily: weatherNiceStatus(parsed.daily),
  };

  parsed.hourly = sample.hourly.map((hour) => ({
    day: dayConverter(hour.dt),
    hour: hourConverter(hour.dt),
    avgTemp: Math.round(hour.temp),
    description: hour.weather[0].description,
    main: hour.weather[0].main,
  }));

  parsed.niceStatus.hourly = weatherNiceStatus(parsed.hourly);

  return parsed;
};
