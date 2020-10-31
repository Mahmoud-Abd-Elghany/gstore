import React, {useState, createContext, useEffect} from "react"

export const GameContext = createContext();

export const GameProvider = props =>{
    const [gameList, setGameList] = useState([]);
    const [searchedList, setSearchedList] = useState([]);
    const [searched, updateSearch] = useState("");
    useEffect(()=>{
        fetch("https://www.cheapshark.com/api/1.0/deals?pageSize=20")
            .then(resp => resp.json())
            .then(resp => setGameList(resp))
            .catch(error => console.log("error", error))
    },[])

    useEffect(()=>{
        fetch(`https://www.cheapshark.com/api/1.0/games?title=${searched}&limit=10`)
            .then(resp => resp.json())
            .then(resp => setSearchedList(resp))
            .catch(error => console.log("error", error))
    },[searched])

    return(
        <GameContext.Provider value={{
            gameList: gameList,
            searchedList: searchedList,
            updateSearch: updateSearch,
            }} >
            {props.children}
        </GameContext.Provider>
    )
}

