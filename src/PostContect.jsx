import React, { useEffect, useState }  from 'react'

import { useHistory, Link } from "react-router-dom";
import { auth, db } from './Firebase';
import { useStateValue } from './StateProvider';


function PostContect({img,Admin,Date,Category,Title,Body,id}) {
    const [userName, setUserName] = useState(null)
    const [user, setUser] = useState(null)
    const [{post}, dispatch] = useStateValue();
    const history = useHistory();
    const change = () => {
        
        dispatch({
          type: "POST_INFO",
          item: {
            img : img,
            Admin : Admin,
            Date : Date,
            Category : Category,
            Title : Title,
            Body : Body,
            id: id,
            delete: "block"
          },
         
        });
        window.scrollTo(0, 0)
        history.push("/post");
      };
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
        const refId = db.collection("posts").where('id','==',id);
        refId.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            doc.ref.delete().then(window.location.reload());
        });
});
    }
    return (
        <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
            
        <div className="post-image">
            <div>
                <img src={img} className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;{Admin}</span>
                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;{Date}</span>
                <span>{Category} </span>
            </div>
        </div>
        <div className="post-title">
            <Link to="./about"></Link><a href="#">{Title}</a>
            <p className="limit">{Body}
            </p>
            <button className="btn post-btn" onClick={change}>Read More &nbsp; <i className="fas fa-arrow-right"></i></button> 
           { user && <button  className="delete" onClick={deleted}> Delete </button> }
        </div>
       
    </div>
   
    )
}

export default PostContect
