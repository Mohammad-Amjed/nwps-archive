import React  from 'react'

import { useHistory, Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


function PostContect({img,Admin,Date,CommentsNo,Title,Body}) {

    // document.addEventListener('DOMContentLoaded', function(selector, maxLength) {
    //     maxLength = 100;
    //     selector = "limit"
    //     const element =  document.getElementByClassName(selector),
    //     truncated = element.innerText;

    // if (truncated.length > maxLength) {
    //     truncated = truncated.substr(0,maxLength) + '...';
    // }
    // return truncated;
    //  }, false);
    
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
        window.scrollTo(0, 0)
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
            <p className="limit">{Body}
            </p>
            <button className="btn post-btn" onClick={change}>Read More &nbsp; <i className="fas fa-arrow-right"></i></button> 
       
        </div>
       
    </div>
   
    )
}

export default PostContect
