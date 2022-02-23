import React, { useEffect, useState } from "react";
import { useShows } from "../misc/custom-hook";
import { apiGet } from "../misc/config";
import ShowGrid from "../Components/show/Showgrid";

export default function Starred() {
  const [Starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Starred && Starred.length > 0) {
      const promises = Starred.map((showId) => apiGet(`/shows/${showId}`));
      Promise.all(promises)
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
  }, [Starred]);

  return (
    <div>
      Starred page
      {isLoading && <div>Show are still loading</div>}
      {error && <div>Error Occured: {error}</div>}
      {!isLoading && !shows && <div>No Shows </div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </div>
  );
}
