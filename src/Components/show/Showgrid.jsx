import React from "react";
import Showcard from "./Showcard";

export default function Showgrid({ data }) {
  return (
    <div>
      {data.map(({ show }) => (
        <Showcard
          key={show.id}
          id={show.id}
          name={show.name}
          img={show.image ? show.image.medium : null}
          summary={show.summary}
        />
      ))}
    </div>
  );
}
