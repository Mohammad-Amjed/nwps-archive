import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './Firebase';

function Footer2() {
    const [email, setEmail] = useState("");
    const [className, setClassName] = useState();
    const scroll = ()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    const handleSubmit = ()=>{
    
        db
        .collection("Newsletter")
        .doc(email)
        .set({
            email
        }).then(console.log("done"))
        setEmail("")
    }
    return (
        <div>
  <footer className="footer">
        <div className="container">
            <div className="about-us" data-aos="fade-right" data-aos-delay="200">
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis
                    iure, autem nulla tenetur repellendus.</p>
            </div>
            <div className="newsletter" data-aos="fade-right" data-aos-delay="200">
                <h2>Newsletter</h2>
                <p>Stay update with our latest</p>
                <div className="form-element">
                    <input  placeholder="Email" value={email} type="email" value={email} onChange={(e) => {setEmail(e.target.value);}} /><span onClick={handleSubmit}><i className="fas fa-chevron-right"></i></span>
                </div>
            </div>
            {/* <div className="instagram" data-aos="fade-left" data-aos-delay="200">
                <h2>Instagram</h2>
                <div className="flex-row">
                    <img src={require("./assets/instagram/thumb-card3.png")} alt="insta1" />
                    <img src={require("./assets/instagram/thumb-card4.png")} alt="insta2" />
                    <img src={require("./assets/instagram/thumb-card5.png")} alt="insta3" />
                </div>
                <div className="flex-row">
                    <img src={require("./assets/instagram/thumb-card6.png")} alt="insta4" />
                    <img src={require("./assets/instagram/thumb-card7.png")} alt="insta5" />
                    <img src={require("./assets/instagram/thumb-card8.png")} alt="insta6" />
                </div>
            </div>  */}
            <div className="follow" data-aos="fade-left" data-aos-delay="200">
                <h2>Follow us</h2>
                <p>Let us be Social</p>
                <div>
                    <p style={{marginTop:"10px"}}>Comming Soon...</p>
                    {/* <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i> */}
                </div>
            </div>
        </div>
        <div className="rights flex-row">
        <h4 className="text-gray">
                    Copyright ©2021 All rights reserved &nbsp;</h4>
                    <h4><Link to="www.youtube.com/c/dailytuition" target="_black">  made by PSD progamming team </Link></h4>
                
        </div>
        {/* <div className="move-up">
            <Link to="/" onClick={scroll}><i className="fas fa-arrow-circle-up fa-2x"></i></Link>
        </div> */}
    </footer>
        </div>
    )
}

export default Footer2
