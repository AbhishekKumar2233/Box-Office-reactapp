import React from "react";
import Showcard from "./Showcard";
import { FlexGrid } from "../styled";

export default function Showgrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <Showcard
          key={show.id}
          id={show.id}
          name={show.name}
          img={show.image ? show.image.medium : null}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
}
