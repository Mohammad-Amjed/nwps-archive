import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function About() {
    return (
        <div className="about" >
            <div className="about-nav">
            <Nav />
            </div>
        <div className="about-z-index" >
            <div className="about__container">
            <h1>Under Construction</h1>
            <h3>This page is currently under construction </h3>
           <Link to="/"><button className="btn">Return to Home</button></Link> 
            </div>
        </div>
        </div>
    )
}

export default About
