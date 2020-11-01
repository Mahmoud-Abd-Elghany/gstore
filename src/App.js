import React from 'react';
import Navbar from "./components/nav/navbar"
import CardList from "./components/card/CardList"
import SearchedList from "./components/card/SearchedList"
import "./components/styles/app.css"
import {GameProvider} from "./components/state/gameContext"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
      <GameProvider>
        <Router>
            <Navbar/>
            <Route exact path="/">
              <CardList/>
            </Route>
            <Route path="/search">
              <SearchedList/>
            </Route>
        </Router>
      </GameProvider>


  );
}

export default App;
