import React from 'react'


function SiteTitle() {
    // document.addEventListener('DOMContentLoaded', function() {
    //     console.log(document.getElementById("idintification").innerText)
    //  }, false);
 
    return (
        <div >
        <section className="site-title">
        <div className="site-background" data-aos="fade-up" data-aos-delay="100">
            <h3 id="idintification">Tours & Travels</h3>
            <h1>Amazing Place on Earth</h1>
            <button className="btn" >Explore</button>
        </div>
    </section>
    
    </div>
    )
}

export default SiteTitle
