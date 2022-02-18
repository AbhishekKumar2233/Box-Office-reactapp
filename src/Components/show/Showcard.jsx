import React from "react";
import { Link } from "react-router-dom";

export default function Showcard({ id, name, img, summary }) {
  const summaryAstext = summary
    ? `${summary.split("").slice(0, 100).join("").replace(/<.+?>/g, "")}...`
    : "No Description";

  return (
    <div>
      <img alt={name} src={img} />
      <h2>{name}</h2>
      <p>{summaryAstext}</p>
      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button>Star me</button>
      </div>
    </div>
  );
}
