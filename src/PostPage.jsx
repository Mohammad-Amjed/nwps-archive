import React, { useEffect, useReducer, useRef } from 'react'
import { Link } from 'react-router-dom'
import SidePosts from './SidePosts'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useStateValue } from './StateProvider';



function PostPage(image) {
    const titleRef = useRef();
    const [{post}] = useStateValue();
    console.log(post)
    // const [state, dispatch] = useReducer(reducer, {image:"https://firebasestorage.googleapis.com/v0/b/nwps-archive.appspot.com/o/blog2.png?alt=media&token=066e75bf-a20e-403a-9b37-7670831370db"})
    useEffect(() => {
        AOS.init({
        duration : 2000
        });
    }, []);
    
    // const change  = ()=> {
    //     dispatch()
    // }

    // function reducer (state, action) {
    //     return {image:"https://firebasestorage.googleapis.com/v0/b/nwps-archive.appspot.com/o/blog1.png?alt=media&token=875271b8-db4a-4fa8-8f5a-e936e857310a"};
        
    // }
    return (
        <div class="postPage">
        <section className="container">
        <div className="site-content">
            <div className="posts">
            <div className="post-content" >
        <div className="post-image">
            <div>
                <img src={post.img}className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;{post.Admin}</span>
                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                <span>2 Commets</span>
            </div>
        </div>
        <div  className="post-title">
            <Link to="./about"></Link><a ref={titleRef} href="#">{post.Title}</a>
            <p>{post.Body}</p>
        
        </div>
    
    </div> 
    {/* <button onClick={change}>Change</button> */}

    </div>
            <div className="popular-post">
            <SidePosts />
            </div>
        </div>   
        </section>
        </div>
    )
}
export default PostPage

