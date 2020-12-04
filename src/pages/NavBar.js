import React, { useEffect, useState } from 'react';
import "./NavBar.css";
import logo from './logo.svg';
import user from "./users/1.png";

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className= {`nav ${show && "nav__black"}`}>
            <img 
                
                className = "nav__logo"
                src= {logo}
                alt = "Netflix Logo"
             />
            <img 
                
                className = "nav__avatar"
                src= {user}
                alt = "User Logo"
             />
        </div>
    )
}

export default NavBar;
