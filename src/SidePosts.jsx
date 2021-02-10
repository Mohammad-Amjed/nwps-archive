import React, { useEffect, useState } from 'react'
import PostContect from './PostContect'
import AOS from 'aos';
import "aos/dist/aos.css";
import { db } from './Firebase';
import SidePost from './SidePost';


function SidePosts() {
  const [snapshots, setSnapshots] = useState();
  useEffect(()=> {
      db.collection("popular posts")
       .get()
       .then((snapshot) => {
        setSnapshots(snapshot.docs)            
       }
      )
      ;
      
  
      
  }, []);
      
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    
    return (
        <div>
            <h2>Popular Post</h2>
            {  snapshots && snapshots.map((doc)=>(
                      <SidePost img={doc.data().image} Admin={doc.data().admin} Date={doc.data().date.toDate().toDateString()} Category={doc.data().category} Title={doc.data().title} Body={doc.data().body} 
                       />))} 
            
              {/* <PostContect img={require("./assets/popular-post/m-blog-1.jpg")}   Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={"New data recording system to better analyse road accidents"}   />
                         
              <PostContect img={require("./assets/popular-post/m-blog-2.jpg")}  Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={"New data recording system to better analyse road accidents"}   />

              <PostContect img={require("./assets/popular-post/m-blog-4.jpg")}  Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={"New data recording system to better analyse road accidents"}   />
  */}
                      
        </div>
    )
}

export default SidePosts
