import React, { useRef } from 'react'
import "./navbar.css"

function Navbar(){
    const navComponent = useRef()
    const menuAnimation= () =>{
        navComponent.current.classList.toggle("open")
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
                <form className="nav-search">
                    <input className="search-bar" type="text" placeholder="search..."/>
                    <button className="search-btn">Search</button>
                </form>
            </div>

        </nav>
    )
}

export default Navbar