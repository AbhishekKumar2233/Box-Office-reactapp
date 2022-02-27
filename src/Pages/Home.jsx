import React, { useEffect, useState } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import {
  SearchInput,
  SearchButtonWrapper,
  RadioInputWrapper
} from "../Components/HomeStyle";
import { apiGet } from "../misc/config";
import Showgrid from "../Components/show/Showgrid";
import Actorgrid from "../Components/actor/Actorgrid";
import "../index.css";
import { useLastQuery } from "../misc/custom-hook";

export default function Home() {
  const [input, setInput] = useLastQuery();
  const [result, setResult] = useState(null);
  const [searchOption, setSearchoption] = useState("shows");
  const isshowsSearch = searchOption === "shows";

  // useEffect(() => {
  //   console.log("use effect run");
  //   //it run ones when arr is empty
  //   //if value of arr changes or update it ptint

  //   return () => {
  //     console.exit("exit");
  //     //it only run when page unmounted
  //   };
  // }, []);
  //basically useEffect hook has 1 func and 1 array

  // input func
  function onInputchange(event) {
    const en = event.target.value;
    setInput(en);
  }
  //keydown func
  function Onkeydown(event) {
    if (event.keyCode === 13) {
      onSearch();
    }
    // console.log(event.keyCode);
  }
  //search func of button
  function onSearch() {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      console.log(setResult);
      setResult(result);
    });
  }

  //render func for get data from api
  function renderResult() {
    if (result && result.length === 0) {
      return <h2>No Result</h2>;
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

      //
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
      <SearchInput
        placeholder="Search for something"
        type="text"
        onChange={onInputchange}
        onKeyDown={Onkeydown}
        value={input}
      />

      <RadioInputWrapper>
        <div>
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
        </div>
        <div>
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
        </div>
      </RadioInputWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResult()}
    </MainPageLayout>
  );
}
