import React from "react";
import { Headline, MainDataWrapper, Taglist } from "../show/Showmainstyle";

export default function ActorMainData({
  name,
  image,
  birthday,
  gender,
  country
}) {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : null} alt={name} />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>
          <h2>{gender}</h2>
        </Headline>
        <h2>{birthday}</h2>
        <h3>{country}</h3>
      </div>
    </MainDataWrapper>
  );
}
