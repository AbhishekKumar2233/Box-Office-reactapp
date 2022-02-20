import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, error: null, show: action.show }; // ..prev it merge prev state
    }
    case "FETCH_FAILED": {
      return {
        ...prevState,
        isLoading: false,
        error: action.error,
        show: action.show
      };
    }
    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null
};

export default function Show() {
  //useParams is hook of react-router-dom
  //used to get value form url
  const { id } = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({ type: "FETCH_SUCCESS", show: results });
          }
        }, 2000);
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILED", error: err.message });
        }
      });

    return () => {
      isMounted = false;
    }; //this func run when page is unmounted
  }, [id]);

  // if (isLoading) {
  //   return <div>Data is being loaded</div>;
  // }
  // if (error) {
  //   return <div>Error{error}</div>;
  // }

  return <h1>This is Show page </h1>;
}
