import React from "react"
import Card from "./Card"
import "./cardgrid.css"

export default function CardList (){
    return(
        <div className="grid">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
        </div>
    )
}