import React from 'react';
import MovieMain from './Components/MovieMain';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieSeats from './Components/MovieSeats';
import SearchMovie from './Components/SearchMovie';
import ModalBoxMovie from './Components/ModalBoxMovie';
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
