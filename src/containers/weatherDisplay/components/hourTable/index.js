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
      {hours.map((hour, k) => (
        <tr key= {4 * k}>
          <th key= {4 * k + 1}>{hour.day}</th>
          <th key= {4 * k + 2}>{hour.hour}</th>
          <th key= {4 * k + 3}>{celcius(hour.avgTemp)}</th>
        </tr>
      ))}
    </tbody>
  </TableWrapper>
);
