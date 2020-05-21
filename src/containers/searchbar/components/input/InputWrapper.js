import styled from "styled-components";
import { theme, switchProp } from "styled-tools";

export const InputWrapper = styled.input`
  color: ${theme('colors.text')};
  font-size: 2rem;
  background: ${theme('colors.inputBackground')};
  width: 80%;
  border: 0;
  border-bottom: 2px solid ${theme('colors.text')};

  &::placeholder {
    color: white;
    opacity: 50%;
  }
`;
