import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

export default function Show() {
  //useParams is hook of react-router-dom
  //used to get value form url
  const { id } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=season&embed[]=cast`).then((results) => {
      setShow(results);
    });
  }, [id]);

  return <h1>This is Show page </h1>;
}
