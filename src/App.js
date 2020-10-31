import React from 'react';
import Navbar from "./components/nav/navbar"
import CardList from "./components/card/CardList"
import SearchedList from "./components/card/SearchedList"
import "./components/styles/app.css"
import {GameProvider} from "./components/state/gameContext"


function App() {
  return (
    <GameProvider>
      <div className="">
        <Navbar/>
        <SearchedList/>
      </div>
    </GameProvider>

  );
}

export default App;
