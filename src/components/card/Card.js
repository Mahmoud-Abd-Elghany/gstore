import React from "react"
import "./card.css"

export default function Card ({game}) {
    const {title, dealID, thumb, salePrice, normalPrice, steamRatingPercent, steamRatingCount, steamRatingText , steamAppID ,metacriticScore, metacriticLink} = game;
    return(
        <div className="card-custom">
            <div >
                <img className="card-image" alt='img' src={thumb}/>
            </div>

            <a className="card-text card-hl" href={`https://www.cheapshark.com/redirect?dealID={${dealID}}`} >{title}</a>

            <div className="card-stats">
                <div className="stat">
                    <div className="value ">{steamRatingPercent}%</div>
                    <a className="type link" href={`https://store.steampowered.com/app/${steamAppID}`}>Steam</a>
                </div>
                <div className="stat border-custom">
                    <div className="value">{salePrice}</div>
                    <div className="mid">{normalPrice}</div>
                </div>
                <div className="stat">
                    <div className="value">{metacriticScore}</div>
                    <a className="type link" href={`https://www.metacritic.com${metacriticLink}`}>metacritic</a>
                </div>
            </div>
        </div>
    )
}