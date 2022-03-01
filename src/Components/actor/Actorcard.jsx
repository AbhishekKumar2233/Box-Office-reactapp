import React from "react";
import { StyleActorCard } from "./actor.style.js";
import { Link } from "react-router-dom";

export default function Actorcard({
  id,
  name,
  img,
  gender,
  country,
  birthday
}) {
  return (
    <StyleActorCard>
      <div className="img-wrapper">
        {/* <img src={profile} alt="no" /> */}
        <img src={img ? img : null} alt={name} />
      </div>
      <h2>{name}</h2>
      <h3>{gender}</h3>
      <p>{country ? `Comes from ${country}` : "No Country Known"}</p>
      {/* {birthday ? <p>Born {birthday}</p> : null} */}
      <p className="birthday">{birthday}</p>
      <div className="btns">
        <Link to={`/people/${id}`}>Read More</Link>
        <button>Star me</button>
      </div>
    </StyleActorCard>
  );
}
