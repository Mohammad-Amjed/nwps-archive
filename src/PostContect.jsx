import React  from 'react'

import { useHistory, Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


function PostContect({img,Admin,Date,CommentsNo,Title,Body}) {
    const [{post}, dispatch] = useStateValue();
    // console.log(post)
    const history = useHistory();
    const change = () => {
        
        dispatch({
          type: "POST_INFO",
          item: {
            img : img,
            Admin : Admin,
            Date : Date,
            CommentsNo : CommentsNo,
            Title : Title,
            Body : Body
          },
         
        });
        history.push("/post");
      };

    return (
        <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
        <div className="post-image">
            <div>
                <img src={img} className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;{Admin}</span>
                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;{Date}</span>
                <span>{CommentsNo} Commets</span>
            </div>
        </div>
        <div className="post-title">
            <Link to="./about"></Link><a href="#">{Title}</a>
            <p>{Body}
            </p>
            <button className="btn post-btn" onClick={change}>Read More &nbsp; <i className="fas fa-arrow-right"></i></button> 
       
        </div>
       
    </div>
   
    )
}

export default PostContect
