import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cast from "../Components/show/Cast";
import Details from "../Components/show/Details";
import Seasons from "../Components/show/Seasons";
import ShowmainData from "../Components/show/ShowmainData";
import { apiGet } from "../misc/config";
import { useShow } from "../misc/custom-hook";
import { ShowPageWrapper, InfoBlock } from "./Showstyled";

export default function Show() {
  //useParams is hook of react-router-dom
  //used to get value form url
  const { id } = useParams();

  const { show, isLoading, error } = useShow(id);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error{error}</div>;
  }

  return (
    // <>
    //   {console.log(show)}

    // </>
    <ShowPageWrapper>
      <ShowmainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
}
