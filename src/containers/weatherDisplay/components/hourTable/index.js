import React from "react";
import { TableWrapper } from "../table/tableWrapper";
import { celcius } from "../table";

export const HourTable = ({ hours }) => (
  <TableWrapper>
    <tbody>
      <tr>
        <th>{"Day"}</th>
        <th>{"Hour"}</th>
        <th>{"Temp"}</th>
      </tr>
      {hours.map((hour) => (
        <tr>
          <th>{hour.day}</th>
          <th>{hour.hour}</th>
          <th>{celcius(hour.avgTemp)}</th>
        </tr>
      ))}
    </tbody>
  </TableWrapper>
);

//TODO: keys