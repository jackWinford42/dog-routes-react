import React from "react"
import {NavLink} from "react-router-dom"

function Nav({dogs}) {
    return (
        <nav>
            <NavLink exact to="/dogs/">List of Dogs</NavLink><br></br>
            {dogs.map(dog => (<><NavLink to={`/dogs/${dog.src}`}>{dog.name}</NavLink><br></br></>))}
        </nav>
    )
}

export default Nav;