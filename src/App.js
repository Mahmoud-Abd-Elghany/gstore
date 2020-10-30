import React from 'react';
import Navbar from "./components/nav/navbar"
import CardList from "./components/card/CardList"
import "./components/styles/app.css"
import {GameProvider} from "./components/state/gameContext"


function App() {
  return (
    <GameProvider>
      <div className="">
        <Navbar/>
        <CardList/>
      </div>
    </GameProvider>

  );
}

export default App;
