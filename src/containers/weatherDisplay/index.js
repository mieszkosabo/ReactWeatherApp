import React from "react";
import { getData } from "./selectors";

export const WeatherDisplay = () => {
  const data = useSelector(getData);

  return (
    <h5>
        ${data}
    </h5>
  );
};
