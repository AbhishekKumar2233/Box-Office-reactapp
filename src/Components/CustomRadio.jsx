import React from "react";

export default function CustomRadio({ label, ...restProps }) {
  return (
    <label htmlFor="actors-search">
      Actors
      <input {...restProps} type="radio" />
    </label>
  );
}
