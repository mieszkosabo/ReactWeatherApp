import React from "react";
import { dayCardWrapper } from "./dayCardWrapper";
import { Table } from '../table';
import { sample, parseResponse } from '../../../../utils/response-utils';

export const DayCard = () => (
  <dayCardWrapper>
    <Table days={parseResponse(sample).daily} />
  </dayCardWrapper>
);