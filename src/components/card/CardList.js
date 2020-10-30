import React, {useContext} from "react"
import Card from "./Card"
import "./cardgrid.css"
import {GameContext} from "../state/gameContext"

export default function CardList (){
    const gameList = useContext(GameContext)

    return(
        <div className="grid">
            {    
                gameList.map(game => {
                    return(<Card game={game}/>)
                })
            }
        </div>
    )
}