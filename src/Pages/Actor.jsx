import React from "react";
import { useParams } from "react-router-dom";
import { useActor } from "../misc/custom-hook";
import ActorMainData from "../Components/actor/ActorMainData";

export default function Actor() {
  //useParams is hook of react-router-dom
  //used to get value form url
  const { id } = useParams();

  const { show, isLoading, error } = useActor(id);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error{error}</div>;
  }

  return (
    <div>
      <h1>Actor</h1>
      <ActorMainData />
    </div>
  );
}
