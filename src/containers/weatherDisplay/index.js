import React from "react";
import { dataSelector } from "./selectors";
import { useSelector } from "react-redux";
import Loader from 'react-loader-spinner'

export const WeatherDisplay = () => {
  const data = useSelector(dataSelector);

  return (
    <>
    <Loader
	     type="ThreeDots"
	     color="#00BFFF"
	     height={100}
	     width={100}
       visible={data === 'fetching!'}
	  />
  <div>{JSON.stringify(data)}</div>
  </>
  );
};
