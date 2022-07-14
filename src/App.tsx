import React from "react";
import MovieMain from "./Components/MovieMain";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import MovieSeats from "./Components/MovieSeats";
import SearchMovie from "./Components/SearchMovie";
import ModalBoxMovie from "./Components/ModalBoxMovie";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

type BoxProps = {
  children: React.ReactNode;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/MovieSeats">
          <MovieSeats />
        </Route>
        <Route path="/ModalBoxMovie/">
          <ModalBoxMovie />
        </Route>
        <Route path="/SearchMovie">
          <SearchMovie />
        </Route>
        <Route exact path="/">
          <MovieMain />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
