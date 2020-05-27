export const sample = require("./sample_response.json");

export const parseResponse = (sample, id) => {
  console.log(sample);
  const parsed = { cityID: id };
  parsed.daily = sample.daily.map((day) => ({
    day: day.dt, //TODO: unix timestamp -> dayName (eg Wed)
    minTemp: day.temp.min, //TODO: zmienić request na taki w Celcjuszach i zaokrąglić
    maxTemp: day.temp.max,
    avgTemp: (day.temp.min + day.temp.max) / 2,
    description: day.weather[0].description,
    main: day.weather[0].main,
  }));

  parsed.hourly = sample.hourly.map((hour) => ({
    day: hour.dt, //TODO: unix timestamp -> dayName (eg Wed)
    hour: hour.dt, // tutaj jakiś gethour
    avgTemp: hour.temp,
    description: hour.weather[0].description,
    main: hour.weather[0].main,
  }));

  // const daily = [...res.daily];
  console.log(parsed);
};
