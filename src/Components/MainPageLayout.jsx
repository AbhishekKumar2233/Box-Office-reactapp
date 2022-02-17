import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

export default function MainPageLayout({ children }) {
  return (
    <div className="app">
      <Title title="Box Office" subtitle="Looking for a movie or an actor" />
      <Navbar />
      {children}
    </div>
  );
}
