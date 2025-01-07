import React from "react";
import "./index.css";
import About from "./Pages/About";
import Show from "./Pages/Show";
import Actor from "./Pages/Actor";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        {/* Home page routing */}
        <Route path="/" element={<Home />} />
        
        {/* Show pages routing */}
        <Route path="/show/:id" element={<Show />} />
        
        {/* Actor pages routing */}
        <Route path="/people/:id" element={<Actor />} />
        
        {/* Starred page routing */}
        <Route path="/starred" element={<Starred />} />
        
        {/* About page routing (optional, if needed) */}
        <Route path="/about" element={<About />} />
        
        {/* Error/404 page can be added here */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
