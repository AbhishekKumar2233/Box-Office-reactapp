import React from "react";

export default function CustomRadio({ label, ...restProps }) {
  return (
    <label htmlFor="actors-search">
      {label}
      <input {...restProps} type="radio" />
    </label>
  );
}
