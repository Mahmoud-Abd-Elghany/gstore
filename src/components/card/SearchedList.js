import React, {useContext} from "react"
import CardSearched from "./CardSearched"
import "./cardgrid.css"
import {GameContext} from "../state/gameContext"

export default function SearchedList (){
    const {searchedList} = useContext(GameContext)

    return(
        <div className="grid">
            {    
                searchedList.map(game => {
                    return(<CardSearched game={game} key={game.gameID}/>)
                })
            }
        </div>
    )
}