import React from "react";

export const Table = ({ days }) => (
  <table>
    <tr>
      <td>DAY</td>
      {days.map((day) => (
        <td>{day.day}</td>
      ))}
    </tr>
    <tr>
    <td>MIN</td>
    {days.map((day) => (
        <td>{day.minTemp}</td>
      ))}
    </tr>
    <tr>
    <td>MAX</td>
    {days.map((day) => (
        <td>{day.maxTemp}</td>
      ))}
    </tr>
    <tr>
    <td>AVG</td>
    {days.map((day) => (
        <td>{day.avgTemp}</td>
      ))}
    </tr>
  </table>
);
