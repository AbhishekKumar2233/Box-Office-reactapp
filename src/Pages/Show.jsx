import React from "react";
import { useParams } from "react-router-dom";

export default function Show() {
  //useParams is hook of react-router-dom
  //used to get value form url
  const params = useParams();
  console.log(params);

  return <h1>This is Show page </h1>;
}
