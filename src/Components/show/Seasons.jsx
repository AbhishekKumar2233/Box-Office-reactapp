import React from "react";

export default function Seasons({ seasons }) {
  return (
    <div>
      <p>
        Seasons in total: <span>{seasons.length} </span>
      </p>
      <p>
        Episodes in total {""}
        <span>
          {seasons.reduce((acc, season) => acc + seasons.episodeOrder, 0)}
        </span>
      </p>
    </div>
  );
}
