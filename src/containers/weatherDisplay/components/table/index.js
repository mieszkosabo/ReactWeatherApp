import React from "react";
import { TableWrapper } from "./tableWrapper";

export const Table = ({ days }) => (
  <TableWrapper>
    <tbody>
      <tr>
        {days.map((day) => (
          <th>{day.day}</th>
        ))}
      </tr>
      <tr>
        {days.map((day) => (
          <td>{day.minTemp}</td>
        ))}
      </tr>
      <tr>
        {days.map((day) => (
          <td>{day.maxTemp}</td>
        ))}
      </tr>
      <tr>
        {days.map((day) => (
          <td>{day.avgTemp}</td>
        ))}
      </tr>
    </tbody>
  </TableWrapper>
);

//TODO: dodoać keys
