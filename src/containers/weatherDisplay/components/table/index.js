import React from "react";
import { TableWrapper } from "./tableWrapper";

export const celcius = (temp) => `${temp} °C`;

export const Table = ({ days }) => (
  <TableWrapper>
    <tbody>
      <tr>
        <th>{""}</th>
        {days.map((day, k) => (
          <th key= {k}>{day.day}</th>
        ))}
      </tr>
      <tr>
        <td>{"min"}</td>
        {days.map((day, k) => (
          <td key= {k}>{celcius(day.minTemp)}</td>
        ))}
      </tr>
      <tr>
        <td>{"max"}</td>
        {days.map((day, k) => (
          <td key= {k}>{celcius(day.maxTemp)}</td>
        ))}
      </tr>
      <tr>
        <td>{"avg"}</td>
        {days.map((day, k) => (
          <td key= {k}>{celcius(day.avgTemp)}</td>
        ))}
      </tr>
    </tbody>
  </TableWrapper>
);

