import React from "react";
import { InputWrapper } from "./InputWrapper.js";

export const Input = ({ onChange, placeholder }) => (
  <InputWrapper onChange={onChange} placeholder={placeholder}></InputWrapper>
);
