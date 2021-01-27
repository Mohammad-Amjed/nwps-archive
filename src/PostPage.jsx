import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SidePosts from './SidePosts'
import AOS from 'aos';
import "aos/dist/aos.css";

function postPage() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div class="postPage">
        <section className="container">
        <div className="site-content">
            <div className="posts">
            <div className="post-content" >
        <div className="post-image">
            <div>
                <img src={require("./assets/Blog-post/blog2.png")}className="img" alt="blog1" />
            </div>
            <div className="post-info flex-row">
                <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                <span>2 Commets</span>
            </div>
        </div>
        <div className="post-title">
            <Link to="./about"></Link><a href="#">Why shoud boys have all the fun? it's the women who are making india an alcohol-lovin country</a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas pharetra. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Blandit libero volutpat sed cras. Morbi tincidunt augue interdum velit euismod in. Lectus sit amet est placerat in. Nulla aliquet enim tortor at auctor urna nunc id cursus. Et malesuada fames ac turpis egestas integer. Adipiscing elit pellentesque habitant morbi tristique senectus et. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Consequat nisl vel pretium lectus quam id. Nulla facilisi cras fermentum odio eu feugiat pretium.

Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Vel fringilla est ullamcorper eget nulla facilisi etiam. Neque laoreet suspendisse interdum consectetur libero. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Nisl suscipit adipiscing bibendum est ultricies integer. Sed elementum tempus egestas sed sed risus pretium. Feugiat sed lectus vestibulum mattis. Gravida dictum fusce ut placerat orci. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Mi proin sed libero enim sed faucibus turpis in. Nulla porttitor massa id neque aliquam. Ac felis donec et odio pellentesque diam volutpat commodo sed. In dictum non consectetur a erat nam at.

Nunc faucibus a pellentesque sit amet porttitor eget dolor. Sodales ut eu sem integer vitae justo. Augue interdum velit euismod in. Pulvinar sapien et ligula ullamcorper. Facilisi cras fermentum odio eu feugiat pretium. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Id consectetur purus ut faucibus pulvinar. Consequat nisl vel pretium lectus quam id. Sit amet consectetur adipiscing elit duis tristique. Elit sed vulputate mi sit amet mauris. Consectetur libero id faucibus nisl tincidunt eget. Sapien pellentesque habitant morbi tristique. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Et egestas quis ipsum suspendisse. Vitae tortor condimentum lacinia quis vel eros donec ac.

Lobortis feugiat vivamus at augue eget. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Eu tincidunt tortor aliquam nulla facilisi cras. Cursus risus at ultrices mi tempus imperdiet nulla. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Fermentum posuere urna nec tincidunt praesent. Sed augue lacus viverra vitae congue eu. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Molestie a iaculis at erat. Elementum nibh tellus molestie nunc. Commodo viverra maecenas accumsan lacus vel. Ultrices in iaculis nunc sed augue. In hac habitasse platea dictumst quisque sagittis purus sit. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Risus quis varius quam quisque id diam vel quam elementum. Donec adipiscing tristique risus nec feugiat in fermentum posuere.

Habitasse platea dictumst vestibulum rhoncus est. Tempor orci eu lobortis elementum nibh tellus molestie. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Purus in mollis nunc sed id semper risus in. Accumsan lacus vel facilisis volutpat est. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Neque laoreet suspendisse interdum consectetur libero id. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nullam eget felis eget nunc.</p>
          
        </div>
       
    </div> 
    </div>
            <div className="popular-post">
              <SidePosts />
            </div>
         </div>   
        </section>
        </div>
    )
}
export default postPage

