import React from "react";
import { Star } from "../styled";

export default function ShowmainData({ name, rating, summary, tags, image }) {
  return (
    <div>
      <img src={image ? image.original : null} alt={name} />
      <div>
        <h1>{name}</h1>

        <div>
          <Star />
          <span> {rating.average || "N/A"}</span>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />

      <div>
        Tags:{""}
        <div>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
