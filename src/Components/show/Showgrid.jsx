import React from "react";
import Showcard from "./Showcard";
import { FlexGrid } from "../styled";
import { useShows } from "../../misc/custom-hook";

export default function Showgrid({ data }) {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);
        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: "REMOVE", showId: show.id });
          } else {
            dispatchStarred({ type: "ADD", showId: show.id });
          }
        };

        return (
          <Showcard
            key={show.id}
            id={show.id}
            name={show.name}
            img={show.image ? show.image.medium : null}
            summary={show.summary}
            onStarClick={onStarClick}
          />
        );
      })}
    </FlexGrid>
  );
}
