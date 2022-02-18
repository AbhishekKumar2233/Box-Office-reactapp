import React from "react";
import Actorcard from "./Actorcard";
import { FlexGrid } from "../styled";
// import img from '../../images/img.png';

export default function Actorgrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <Actorcard
          key={person.id}
          id={person.id}
          name={person.name}
          gender={person.gender}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          img={person.image ? person.image.medium : null}
        />
      ))}
    </FlexGrid>
  );
}
