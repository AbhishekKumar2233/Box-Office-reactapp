import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

export default function Show() {
  //useParams is hook of react-router-dom
  //used to get value form url
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          if (isMounted) {
            setShow(results);
            setIsLoading(false);
          }
        }, 2000);
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    }; //this func run when page is unmounted
  }, [id]);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error{error}</div>;
  }

  return <h1>This is Show page </h1>;
}
