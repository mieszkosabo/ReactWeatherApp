import React from "react";
import { dataSelector, cityIDSelector } from "./selectors";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { DayCard } from "./components/dayCard";
import { sample, parseResponse } from "../../utils/response-utils";

export const WeatherDisplay = () => {
  const data = useSelector(dataSelector);

  //TODO: zaminieć empty i fetching na stałe
  if (data === "empty" || data === "fetching!" || data == "ERROR WHILE FETCHING") {
    return (
      <>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          visible={data === "fetching!"}
        />
      </>
    );
  } else {
    return (
      <>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          visible={data === "fetching"}
        />
        <DayCard days={data} />
      </>
    );
  }
};
