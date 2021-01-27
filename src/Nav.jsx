import React, { useState } from 'react'
import { Link  } from "react-router-dom";




function Nav() {
    const [Class, setClass] = useState("nav")
    const ClassSet = ()=> {
        if (Class==="nav"){
            setClass("nav collapse")
        }
        else {
            setClass("nav")
        }
    }
    return (
        <nav className={Class} id="nav">
        <div className="nav-menu flex-row">
            <div className="nav-brand">
                <Link to="/" className="text-gray">Blooger</Link>
            </div>
            <div className="toggle-collapse">
                <div className="toggle-icons">
                    <i className="fas fa-bars" onClick={ClassSet}></i>
                </div>
            </div>
            <div>
                <ul className="nav-items">
                    <li className="nav-link">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="#">Category</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="#">Archive</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="#">Pages</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="social text-gray">
                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#"><i className="fab fa-instagram"></i></Link>
                <Link to="#"><i className="fab fa-twitter"></i></Link>
                <Link to="#"><i className="fab fa-youtube"></i></Link>
            </div>
        </div>
    </nav>
    )
}

export default Nav
