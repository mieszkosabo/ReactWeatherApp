import React from "react";
import { CityNameHeaderWrapper } from "./CityNameHeaderWrapper";

export const CityNameHeader = ({ city, niceStatus }) => (
  <CityNameHeaderWrapper>
    Weather in {city} is going to be {niceStatus}!
  </CityNameHeaderWrapper>
);
