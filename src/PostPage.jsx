import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SidePosts from './SidePosts'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useStateValue } from './StateProvider';
import { auth, db } from './Firebase';
import {useHistory } from "react-router-dom"



function PostPage() {
    const [userName, setUserName] = useState(null)
    const [user, setUser] = useState(null)
    const titleRef = useRef();
    const [{post}] = useStateValue();
    const history = useHistory()
    // alert(post.Title)
    if (post.Title == undefined ){
        history.push('/')
    }
    // const [state, dispatch] = useReducer(reducer, {image:"https://firebasestorage.googleapis.com/v0/b/nwps-archive.appspot.com/o/blog2.png?alt=media&token=066e75bf-a20e-403a-9b37-7670831370db"})
    useEffect(() => {
        AOS.init({
        duration : 2000
        });
    }, []);
    useEffect(() => {
        // will only run once when the app component loads...
          
        auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            console.log(authUser.displayName)
            setUserName(authUser.displayName)
            setUser(true)
          }
      
      
        });
      }, []);
      const deleted = ()=> {
        const refId = db.collection("posts").where('id','==',post.id);
        refId.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.delete().then(history.push("/"));
        });
        });
    }
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
    { user && <button  className="delete" style={{display:post.delete}} onClick={deleted}> Delete </button> }
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

