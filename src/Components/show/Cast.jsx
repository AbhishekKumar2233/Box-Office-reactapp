import React from "react";

export default function Cast({ cast }) {
  return (
    <div>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key}>
          <div>
            <img
              src={person.image ? person.image.medium : null}
              alt={"Cast-person"}
            />
          </div>
          <div>
            <span>
              {person.name} | {character.name} {voice ? "| Voice" : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
