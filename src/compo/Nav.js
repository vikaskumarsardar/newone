import React,{useEffect} from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
export default function Nav() {

    
    return (
        <div className="Nav">
            <nav>
            <div className="logo">
                <NavLink to='/'><h1 attr="Swapan ki Dukaan">Swapan ki Dukaan</h1></NavLink>
            </div>
            <div className="navlinks">
                <ul>
                    <li><NavLink to='/home'><p>Home</p></NavLink></li>
                    <li><NavLink to='/services'><p>Service</p></NavLink></li>
                    <li><NavLink to='/contact'><p>Contact</p></NavLink></li>
                    <li><NavLink to='/about'><p>About</p></NavLink></li>
                </ul>
            </div>

        </nav>
        </div>
    )
}
