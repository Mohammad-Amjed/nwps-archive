import React , {useEffect, useState} from "react"

import Nav from "./Nav"
import './css/Style.css';
import './css/all.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import SiteTitle from "./SiteTitle";
import PostContect from "./PostContect";
import Categoty from "./Categoty";
import Pagination from "./Pagination";
import Footer from "./Footer";
import SidePosts from "./SidePosts";
import { db, timestamp } from "./Firebase";


  



function App() {
  const [snapshots, setSnapshots] = useState();
useEffect(()=> {
    db.collection("posts").orderBy("date" , "desc")
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
      const posts = [1,2,3,4];
      const [Image, setImage] = useState("")
      const [Title, setTitle] = useState("")
      const [Body, setBody] = useState("")
      const [Date, setDate] = useState()
      const [Admin, setAdmin] = useState("")
              //  db.collection("posts")
              //     .get()
              //     .then((snapshot) => {
              //       snapshot.docs.map((doc)=>(
              //         console.log(doc.data().image)
              //         // <h2>test</h2>
              //         // <PostContect img={doc.data().image}   Admin={doc.data().admin} Date={"January 14, 2019"} CommentsNo={"2"} Title={doc.data().title} Body={doc.data().title}  />
              //       ))
              //     })
              //     db.collection("posts")
              //     .get()
              //     .then((snapshot) => {
              //       snapshot.docs.forEach((doc)=>{
              //         // <h2>test</h2>
              //           console.log(doc.data().image)
              //       }) } )
                  
    

  return (
    
    <div className="app">
    
       

     
    <Nav />
    <SiteTitle />
           
        <section className="container">
            <div className="site-content">
           
                <div className="posts">
                <div className="posts" id="posts">
                  {  snapshots && snapshots.map((doc)=>(
                      <PostContect img={doc.data().image} Admin={doc.data().admin} Date={doc.data().date.toDate().toDateString()} Category={doc.data().category} Title={doc.data().title} Body={doc.data().body} id={doc.data().id} 
                       />))}          
                
                </div>

                    <Pagination />
                </div>
                <aside className="sidebar">
                <Categoty />
                    <div className="popular-post">
                         
                        <SidePosts />
                        
                       
                      
                      
                    </div>
                  
                </aside>
            </div>
        </section>

       
    <Footer />



  


    </div>
   
   
  );
}

export default App;
