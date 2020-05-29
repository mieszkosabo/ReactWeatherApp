import React from "react";
import { DayCardWrapper } from "./DayCardWrapper";
import { Table } from "../table";
import { CityNameHeader } from "../cityNameHeader";
import { citiesList } from "../../../../assets";
import { TenorGif } from '../TenorGif';

const cityNameByID = (id) => citiesList.find((city) => city.id === id).name;

export const DayCard = ({ days }) => (
  <DayCardWrapper>
    <TenorGif url={"https://media.tenor.com/images/999a02208d51938c7d7496dcf2379920/tenor.gif"} />
    <CityNameHeader city={cityNameByID(days.cityID)} niceStatus={days.niceStatus.daily} />
    <Table days={days.daily} />
  </DayCardWrapper>
);
