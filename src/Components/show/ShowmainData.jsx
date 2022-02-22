import React from "react";
import { Headline, MainDataWrapper, Taglist } from "./Showmainstyle";
import { Star } from "../styled";

export default function ShowmainData({ name, rating, summary, tags, image }) {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : null} alt={name} />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>

          <div>
            <Star />
            <span> {rating.average || "N/A"}</span>
          </div>
        </Headline>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div>
          Tags:{""}
          <Taglist>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </Taglist>
        </div>
      </div>
    </MainDataWrapper>
  );
}
