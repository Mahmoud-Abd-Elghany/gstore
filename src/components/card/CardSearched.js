import React from "react"
import "./card.css"

export default function CardSearched ({game}) {
    const {external,thumb,cheapest, cheapestDealID,steamAppID} = game;
    
    return(
        <div className="card-custom">
            <div >
                <img className="card-image" alt='img' src={thumb}/>
            </div>

            <a className="card-text card-hl" href={`https://www.cheapshark.com/redirect?dealID={${cheapestDealID}}`} >{external}</a>

            <div className="card-stats-searched">
                <div className="stat searched">
                    <div className="value">{cheapest}</div>
                    <a className="type link" href={`https://store.steampowered.com/app/${steamAppID}`}>Steam</a>
                </div>
            </div>
        </div>
    )
}