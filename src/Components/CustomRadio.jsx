import React from "react";
import { RadioWrapper } from "./CustomRadioStyle";

export default function CustomRadio({ label, ...restProps }) {
  return (
    <RadioWrapper htmlFor="actors-search">
      {label}
      <input {...restProps} type="radio" />
      <span></span>
    </RadioWrapper>
  );
}
