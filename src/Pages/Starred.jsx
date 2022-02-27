import React, { useEffect, useState } from "react";
import { useShows } from "../misc/custom-hook";
import { apiGet } from "../misc/config";
import ShowGrid from "../Components/show/Showgrid";
import MainPageLayout from "../Components/MainPageLayout";

export default function Starred() {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => apiGet(`/shows/${showId}`));
      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          console.log(results);
          setShows(results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && <div>Show are still loading</div>}
      {error && <div>Error Occured: {error}</div>}
      {!isLoading && !error && shows && <h2>Data is here</h2>}
      {!isLoading && !shows && <h1>No Data </h1>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
}
