import React from "react";
import { Link } from "react-router-dom";
// import { SearchCard } from "../styled";
import { Star } from "../styled";
import { StyleShowCard } from "./show.style";

export default function Showcard({
  id,
  name,
  img,
  summary,
  onStarClick,
  isStarred
}) {
  const summaryAstext = summary
    ? `${summary.split("").slice(0, 100).join("").replace(/<.+?>/g, "")}...`
    : "No Description";

  return (
    <StyleShowCard>
      <div className="img-wrapper">
        <img alt={name} src={img} />
      </div>
      <h1>{name}</h1>
      <p>{summaryAstext}</p>
      <div className="btns">
        <Link to={`/show/${id}`}>Read More</Link>

        <button type="button" onClick={onStarClick}>
          <Star />
        </button>
      </div>
    </StyleShowCard>
  );
}
