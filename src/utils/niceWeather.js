import {
  RAIN,
  MAX_NICE,
  MIN_NICE,
  MAX_NICE_AVG,
  MIN_MAX_AVG,
  NICE,
  PASSABLE,
  NOT_NICE,
} from "./consts";

const noRainyDays = (days) => {
  for (const day of days) {
    if (day.main === RAIN) {
      return 0;
    }
  }
  return 1;
};

const niceAVGTemp = (days) => {
  for (const day of days) {
    if (day.avgTemp < MIN_MAX_AVG || day.avgTemp > MAX_NICE_AVG) {
      return 0;
    }
  }
  return 1;
};

const niceMinMaxTemp = (days) => {
  for (const day of days) {
    if (
      day.avgTemp < MIN_NICE ||
      day.minTemp < MIN_NICE ||
      day.maxTemp > MAX_NICE
    ) {
      return 0;
    }
  }
  return 1;
};

export const weatherNiceStatus = (days) => {
  const conditionsPassed =
    noRainyDays(days) + niceAVGTemp(days) + niceMinMaxTemp(days);
  switch (conditionsPassed) {
    case 3:
      return NICE;
    case 2:
      return PASSABLE;
    default:
      return NOT_NICE;
  }
};
