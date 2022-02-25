import React from "react";
import { useParams } from "react-router-dom";
import ActorMainData from "../Components/actor/ActorMainData";

export default function Actor() {
  //useParams is hook of react-router-dom
  //used to get value form url
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Actor</h1>
      <ActorMainData />
    </div>
  );
}
