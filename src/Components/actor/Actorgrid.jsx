import React from "react";
import Actorcard from "./Actorcard";

export default function Actorgrid({ data }) {
  return (
    <div>
      {data.map(({ person }) => (
        <Actorcard key={person.id} id={person.id} name={person.name} />
      ))}
    </div>
  );
}
