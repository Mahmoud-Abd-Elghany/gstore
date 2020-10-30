import React, {useState, createContext, useEffect} from "react"

export const GameContext = createContext();

export const GameProvider = props =>{
    const [gameList, setGameList] = useState([])
    useEffect(()=>{
        fetch("https://www.cheapshark.com/api/1.0/deals?pageSize=20")
            .then(resp => resp.json())
            .then(resp => setGameList(resp))
            .catch(error => console.log("error", error))
            console.log(gameList)
    },[])
    return(
        <GameContext.Provider value={gameList}>
            {props.children}
        </GameContext.Provider>
    )
}

