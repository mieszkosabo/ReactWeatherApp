import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

import { DayCard } from "./components/dayCard";
import { dataSelector, tenorSelector } from "./selectors";
import { forecastSelector } from "../app/selectors";

export const WeatherDisplay = () => {
  const data = useSelector(dataSelector);
  const gif = useSelector(tenorSelector);
  const isDaily = useSelector(forecastSelector);

  const dayOrHourCard = (data, isDaily) =>
    isDaily ? (
      <DayCard data={data} days={data.daily} gif= {gif} />
    ) : (
      <DayCard data={data} hours={data.hourly} gif= {gif}/>
    );

  //TODO: zaminieć empty i fetching na stałe
  if (
    data === "empty" ||
    data === "fetching!" ||
    data == "ERROR WHILE FETCHING"
  ) {
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
        {dayOrHourCard(data, isDaily)}
      </>
    );
  }
};
