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
      Starred page
      {isLoading && <div>Show are still loading</div>}
      {error && <div>Error Occured: {error}</div>}
      {!isLoading && !error && shows && <div> data is here</div>}
      {!isLoading && !shows && <div>No Shows </div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
}
