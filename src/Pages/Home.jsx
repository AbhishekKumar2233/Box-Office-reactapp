import React, { useState } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import Navbar from "../Components/Navbar";
import "../index.css";

export default function Home() {
  const [input, setInput] = useState("");

  function onSearch() {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
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
    </MainPageLayout>
  );
}
