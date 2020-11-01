import React, { useRef, useContext, useState, useHistory} from 'react'
import "./navbar.css"
import {GameContext} from "../state/gameContext"
import {
    Link,
    withRouter
  } from "react-router-dom";

function Navbar(props){
    const navComponent = useRef()
    const redirect = () =>{
        props.history.push('/search')
    }
    const menuAnimation= () =>{
        navComponent.current.classList.toggle("open")
    }
    const [search,setSearch] = useState("");
    const {updateSearch} = useContext(GameContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        updateSearch(search);
        redirect();
        setSearch("")
        console.log(search)
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
                   <Link to="/"> <li onClick={menuAnimation} ><a href="#">Home</a></li> </Link>
                    <li onClick={menuAnimation} ><a href="#">List</a></li>
                    <li onClick={menuAnimation} ><a href="#">Game</a></li>
                </ul>
                
                <form className="nav-search" onSubmit={handleSubmit}>
                    <input className="search-bar" type="text" placeholder="search..." value={search} onChange={(e)=> setSearch(e.target.value)}/>
                        <button className="search-btn" type="submit">
                            Search
                        </button>
                </form>

            </div>

        </nav>
    )
}

export default withRouter(Navbar);