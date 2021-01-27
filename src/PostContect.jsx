import React from 'react'
import {Link} from "react-router-dom";


function PostContect({img,Admin,Date,CommentsNo,Title,Body}) {
    return (
        <div className="post-content">
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
           <Link to="/post"> <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button></Link>
        </div>
       
    </div>
   
    )
}

export default PostContect
