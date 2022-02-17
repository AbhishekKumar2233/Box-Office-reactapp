import React, { useState } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import Navbar from "../Components/Navbar";
import { apiGet } from "../misc/config";
import Showgrid from "../Components/show/Showgrid";
import Actorgrid from "../Components/actor/Actorgrid";
import "../index.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [searchOption, setSearchoption] = useState("shows");
  const isshowsSearch = searchOption === "shows";

  function onSearch() {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
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
      return result[0].show ? (
        <Showgrid data={result} />
      ) : (
        //result.map((result) => (
        // <div key={result.show.id}>{result.show.name}</div>));

        <Actorgrid data={result} />
      );
      //result.map((result) => (
      // <div key={result.person.id}>{result.person.name}</div>));

      //  2nd logic to get same output
      //     searchOption === "shows"
      // ? result.map((result) => (
      //     <div key={result.show.id}>{result.show.name}</div>
      //   ))
      // : result.map((result) => (
      //     <div key={result.person.id}>{result.person.name}</div>
      //   ));
    }
    return null;
  }

  function onRadiochange(event) {
    setSearchoption(event.target.value);
  }

  return (
    <MainPageLayout>
      <input
        placeholder="Search for something"
        type="text"
        onChange={onInputchange}
        onKeyDown={Onkeydown}
        value={input}
      />

      <button type="button" onClick={onSearch}>
        Search
      </button>
      <br />
      <label htmlFor="shows-search">
        Shows
        <input
          id="shows-search"
          type="radio"
          value="shows"
          checked={isshowsSearch}
          onChange={onRadiochange}
        />
      </label>
      <label htmlFor="actors-search">
        Actors
        <input
          id="actors-search"
          type="radio"
          value="people"
          checked={!isshowsSearch}
          onChange={onRadiochange}
        />
      </label>
      {renderResult()}
    </MainPageLayout>
  );
}
