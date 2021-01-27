import React from 'react'

function Extra() {
    return (
        <div>
            // owl carousel --------------------------------------------------------------------------

<section>
     <div className="blog">
         <div className="container">
             <div className="owl-carousel owl-theme blog-post">
                 <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                     <img src={require("./assets/Blog-post/post-1.jpg")} alt="post-1 "/>
                     <div className="blog-title">
                         <h3>London Fashion week's continued the evolution</h3>
                         <button className="btn btn-blog">Fashion</button>
                         <span>2 minutes</span>
                     </div>
                 </div>
                 <div className="blog-content" data-aos="fade-in" data-aos-delay="200">
                     <img src={require("./assets/Blog-post/post-3.jpg")} alt="post-1" />
                     <div className="blog-title">
                         <h3>London Fashion week's continued the evolution</h3>
                         <button className="btn btn-blog">Fashion</button>
                         <span>2 minutes</span>
                     </div>
                 </div>
                 <div className="blog-content" data-aos="fade-left" data-aos-delay="200">
                     <img src={require("./assets/Blog-post/post-2.jpg")} alt="post-1" />
                     <div className="blog-title">
                         <h3>London Fashion week's continued the evolution</h3>
                         <button className="btn btn-blog">Fashion</button>
                         <span>2 minutes</span>
                     </div>
                 </div>
                 <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                     <img src={require("./assets/Blog-post/post-5.png")} alt="post-1" />
                     <div className="blog-title">
                         <h3>London Fashion week's continued the evolution</h3>
                         <button className="btn btn-blog">Fashion</button>
                         <span>2 minutes</span>
                     </div>
                 </div>
             </div>
             <div className="owl-navigation">
                 <span className="owl-nav-prev"><i className="fas fa-long-arrow-alt-left"></i></span>
                 <span className="owl-nav-next"><i className="fas fa-long-arrow-alt-right"></i></span>
             </div>
         </div>
     </div>
 </section>


 // newsletter ---------------------------------------------------------------------
   <div className="newsletter" data-aos="fade-up" data-aos-delay="300">
                        <h2>Newsletter</h2>
                        <div className="form-element">
                            <input type="text" className="input-element" placeholder="Email" />
                            <button className="btn form-btn">Subscribe</button>
                        </div>
                    </div>

 // popular category --------------------------------------------------------------------
  <div className="popular-tags">
                        <h2>Popular Tags</h2>
                        <div className="tags flex-row">
                            <span className="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="200">technology</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="300">travel</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="400">illustration</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="500">design</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="700">love</span>
                            <span className="tag" data-aos="flip-up" data-aos-delay="800">project</span>
                        </div> */}
                    {/* </div>


        </div>
    )
}

export default Extra
