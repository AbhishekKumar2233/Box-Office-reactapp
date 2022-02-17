import React, { useState } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import Navbar from "../Components/Navbar";
import { apiGet } from "../misc/config";
import "../index.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  function onSearch() {
    apiGet(`/search/shows?q=${input}`).then((result) => {
      console.log(setResult);
      setResult(result);
    });
  }

  function onInputchange(event) {
    const en = event.target.value;
    setInput(en);
  }

  function Onkeydown(event) {
    if (event.keyCode === 13) {
      onSearch();
    }
    // console.log(event.keyCode);
  }

  function renderResult() {
    if (result && result.length === 0) {
      return <div>No Result</div>;
    }
    if (result && result.length > 0) {
      return (
        <div>
          {result.map((result) => (
            <div key={result.show.id}>{result.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  }

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputchange}
        onKeyDown={Onkeydown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
}
