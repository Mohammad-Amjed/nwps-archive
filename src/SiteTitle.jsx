import React from 'react'


function SiteTitle() {

    const scroll = ()=>{
        window.scrollTo({top:750,left:0,behavior:"smooth"})
    } 
    return (
        <div >
        <section className="site-title">
            <div className="site-shade">
        <div className="site-background" data-aos="fade-up" data-aos-delay="100">
            <h1>NWPS archive</h1>
            <h3 id="idintification">By PSD CLUB</h3>
            <button className="btn" onClick={scroll}>Explore</button>
        </div>
        </div>
    </section>
    
    </div>
    )
}

export default SiteTitle
