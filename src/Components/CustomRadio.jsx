import React from "react";
import { RadioWrapper } from "./CustomRadioStyle";

export default function CustomRadio({ label, ...restProps }) {
  return (
    <div htmlFor={restProps.id}>
      {label}
      <input type="radio" {...restProps} />
    </div>
  );
}
