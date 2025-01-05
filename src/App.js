import React from "react";
import "./index.css";
import About from "./Pages/About";
import Show from "./Pages/Show";
import Actor from "./Pages/Actor";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {/* home page routing */}
        <Route exact path="/Box-Office-reactapp">
          <Home />
        </Route>
        {/* show pages  */}
        <Route exact path="/show/:id">
          <Show />
        </Route>
        {/* Actor pages  */}
        <Route exact path="/people/:id">
          <Actor />
        </Route>

        {/* simple routing */}
        <Route exact path="/starred">
          <Starred />
        </Route>
        {/* component rendering */}
        {/* <Route exact path="/about">
          <About />
        </Route> */}
        {/* error page */}
        <Route>This is 404 page</Route>
      </Switch>
      {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch> */}
    </ThemeProvider>
  );
}

export default App;
