import React from "react";

export default function Actorcard({
  id,
  name,
  img,
  gender,
  country,
  birthday
}) {
  return (
    <div>
      <img src={img ? img : null} alt={name} />
      <h2>{name}</h2>
      <h3>{gender}</h3>
      <p>{country ? `Comes from ${country}` : "No Country Known"}</p>
      {/* {birthday ? <p>Born {birthday}</p> : null} */}
      <p>{birthday}</p>
    </div>
  );
}
