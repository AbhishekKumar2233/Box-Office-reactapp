import React from "react";
import { RadioWrapper } from "./CustomRadioStyle";

export default function CustomRadio({ label, ...restProps }) {
  return (
    <RadioWrapper htmlFor={restProps.id}>
      {label}
      <input {...restProps} type="radio" />
      <span />
    </RadioWrapper>
  );
}
