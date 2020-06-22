import React from 'react';
import Loader from "react-loader-spinner";
import { FETCHING } from '../../../const';

export const MyLoader = ({ data }) => (
  <Loader
    type="ThreeDots"
    color="#00BFFF"
    height={100}
    width={100}
    visible={data === FETCHING}
  />
);
