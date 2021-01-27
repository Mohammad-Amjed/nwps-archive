import React , {useEffect} from "react"
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


  



function App() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

  return (
    
    <div className="app">
       

        
    <Nav />
    <SiteTitle />
           
        <section className="container">
            <div className="site-content">
                <div className="posts">
               
                    <PostContect img={require("./assets/Blog-post/blog1.png")}   Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={"Why shoud boys have all the fun? it's the women who are making india an alcohol-lovin country"} Body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde"}  />


                    <PostContect img={require("./assets/Blog-post/blog2.png")}   Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={"Why shoud boys have all the fun? it's the women who are making india an alcohol-lovin country"} Body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde"}  />

                    <PostContect img={require("./assets/Blog-post/blog3.png")}    Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={">New data recording system to better analyse road accidents"} Body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde"}  />

                    <PostContect img={require("./assets/Blog-post/blog4.png")}     Admin={"Admin"} Date={"January 14, 2019"} CommentsNo={"2"} Title={">New data recording system to better analyse road accidents"} Body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde"}  />


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
