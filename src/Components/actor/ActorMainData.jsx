import React from "react";

export default function ActorMainData({ name, image }) {
  return (
    <div>
      <img src={image ? image.original : null} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
