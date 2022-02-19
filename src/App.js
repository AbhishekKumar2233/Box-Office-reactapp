import React from "react";
import "./index.css";
import About from "./Pages/About";
import Show from "./Pages/Show";
import Actor from "./Pages/Actor";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        {/* home page routing */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* show pages  */}
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route exact path="/people/:id">
          <Actor />
        </Route>
        {/* simple routing */}
        <Route exact path="/starred">
          This is starred
        </Route>
        {/* component rendering */}
        <Route exact path="/about">
          <About />
        </Route>
        {/* error page */}
        <Route>This is 404 page</Route>
      </Switch>
      {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
