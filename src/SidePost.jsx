import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function SidePost({img,Admin,Date,Category,Title,Body}) {
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
            delete:"none"
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
                <span>{Category} </span>
            </div>
        </div>
        <div className="post-title">
            <Link to="./about"></Link><a href="#">{Title}</a>
            {/* <p className="limit">{Body}
            </p> */}
            <p className="limit">
            </p>
            <button className="btn post-btn" onClick={change}>Read More &nbsp; <i className="fas fa-arrow-right"></i></button> 
       
        </div>
       
    </div>
    )
}

export default SidePost
