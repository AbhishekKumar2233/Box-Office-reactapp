import React from "react";
import "./index.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Navbar />
        <Route exact path="/">
          This is home page
        </Route>

        <Route exact path="/starred">
          This is starred
        </Route>
        {/* component rendering */}
        <Route exact path="/about">
          <About />
        </Route>
        <Route>This is 404 page</Route>
      </Switch>
      {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch> */}
    </>
  );
}

export default App;
