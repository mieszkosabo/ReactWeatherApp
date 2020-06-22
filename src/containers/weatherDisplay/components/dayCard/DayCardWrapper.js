import styled from "styled-components";
import { theme } from "styled-tools";

export const DayCardWrapper = styled.div`
  color: ${theme("colors.tableColor")};
  margin: 0 auto;
  margin-top 5%;
  padding: 5px 30px;
  border-radius: 3px;
  background-color: transparent;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
`;
