import React, { useEffect } from 'react'
import PostContect from './PostContect'
import AOS from 'aos';
import "aos/dist/aos.css";


function SidePosts() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    
    return (
        <div>
            <h2>Popular Post</h2>
            
              <PostContect img={require("./assets/popular-post/m-blog-1.jpg")}   Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={"New data recording system to better analyse road accidents"}   />
                         
              <PostContect img={require("./assets/popular-post/m-blog-2.jpg")}  Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={"New data recording system to better analyse road accidents"}   />

              <PostContect img={require("./assets/popular-post/m-blog-4.jpg")}  Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={"New data recording system to better analyse road accidents"}   />
 
                      
        </div>
    )
}

export default SidePosts
