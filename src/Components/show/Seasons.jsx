import React from "react";
import { SeasonList, SeasonsWrapper } from "./Seasonstyle";

export default function Seasons({ seasons }) {
  return (
    <SeasonsWrapper>
      <p>
        Seasons in total: <span>{seasons.length} </span>
      </p>
      <p>
        Episodes in total {""}
        <span>
          {seasons.reduce((acc, season) => acc + seasons.episodeOrder, 0)}
        </span>
      </p>
      <SeasonList>
        {seasons.map((season) => (
          <div key={season.id} className="season-item">
            <div className="left">
              <p>Seasons {season.number}</p>
              <p>
                Episodes: <span>{season.episodeOrder}</span>
              </p>
            </div>
            <div className="right">
              Aired:{""}
              <span>
                {season.premierDate} - {season.endDate}
              </span>
            </div>
          </div>
        ))}
      </SeasonList>
    </SeasonsWrapper>
  );
}
