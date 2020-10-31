import React, { useRef, useContext, useState} from 'react'
import "./navbar.css"
import {GameContext} from "../state/gameContext"

function Navbar(){
    const navComponent = useRef()
    const menuAnimation= () =>{
        navComponent.current.classList.toggle("open")
    }
    const [search,setSearch] = useState("");
    const {updateSearch} = useContext(GameContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        updateSearch(search);
    }

    return(
        <nav>
            <div className="hamburger" onClick={menuAnimation}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="nav-components" ref={navComponent}>
                <ul className="nav-links">
                    <li onClick={menuAnimation} ><a href="#">Home</a></li>
                    <li onClick={menuAnimation} ><a href="#">List</a></li>
                    <li onClick={menuAnimation} ><a href="#">Game</a></li>
                </ul>
                <form className="nav-search" onSubmit={handleSubmit}>
                    <input className="search-bar" type="text" placeholder="search..." value={search} onChange={(e)=> setSearch(e.target.value)}/>
                    <button className="search-btn">Search</button>
                </form>
            </div>

        </nav>
    )
}

export default Navbar