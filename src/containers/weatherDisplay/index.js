import React from "react";
import { dataSelector } from "./selectors";
import { useSelector } from "react-redux";
export const WeatherDisplay = () => {
  const data = useSelector(dataSelector);

  return <div>{data}</div>;
};
