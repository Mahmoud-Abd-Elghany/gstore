import React from "react"
import "./card.css"

export default function Card () {
    return(
        <div className="card-custom">
            <div >
                <img className="card-image" alt='img' src="https://static.gamespot.com/uploads/original/1197/11970954/3245626-xlarge.img.jpg"/>
            </div>

            <div className="card-text">
                <a className="card-hl" href=".">Card Title</a>
            </div>

            <div className="card-stats">
                <div className="stat">
                    <div className="value">4m</div>
                    <div className="type">views</div>
                </div>
                <div className="stat border-custom">
                    <div className="value">3/10</div>
                    <div className="type">rate</div>
                </div>
                <div className="stat">
                    <div className="value">4/5</div>
                    <div className="type">ign</div>
                </div>
            </div>
        </div>
    )
}