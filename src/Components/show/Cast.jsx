import React from "react";
import { CastList } from "./Caststyle";

export default function Cast({ cast }) {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : null}
              alt={"Cast-person"}
            />
          </div>
          <div className="actor">
            <span>
              <span classname="bold">{person.name}</span> | {character.name}{" "}
              {voice ? "| Voice" : ""}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
}
