import React, { useEffect, useState } from 'react'
import { Link  } from "react-router-dom";
import { auth } from './Firebase';
import Modal from 'react-modal';
import Signup from "./Signup"




function Nav() {
    const [Class, setClass] = useState("nav")
    const [userName, setUserName] = useState(null)
    const [user, setUser] = useState(null)
    const [ModalIsOpen, setModalIsOpen] = useState(false)
    const ClassSet = ()=> {
        if (Class==="nav"){
            setClass("nav collapse")
        }
        else {
            setClass("nav")
        }
    }
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
      const OpenModal = ()=> {
          setModalIsOpen(true)
      }
      const closeModal = ()=> {
        setModalIsOpen(false)
    }
      const logout = ()=> {
        auth.signOut().then(() => {
            console.log("success")
            window.location.reload();
          }).catch((error) => {
            // An error happened.
          });
          
      }
      const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    return (
        
        <nav className={Class} id="nav">
            
        <div className="nav-menu flex-row">
            <div className="nav-brand">
                <Link to="/" className="text-gray">NWPS archive</Link>
            </div>
            <div className="toggle-collapse">
                <div className="toggle-icons">
                    <i className="fas fa-bars" onClick={ClassSet}></i>
                </div>
            </div>
            <div className="items-container">
                <ul className="nav-items">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="#">About</Link>
                    </li>
                   
                    <li className="nav-link">
                        <Link to="#">About PSD</Link>
                    </li>
                    <li className="nav-link">
                        <a href="https://forms.gle/WbvQm7HHjPc4Ur2e7" target="_blank">Become a member</a>
                    </li>
                   
                    <li className="nav-link">
                        <Link to="newpost">Add Posts</Link>
                    </li>
                    {user ?   <li className="nav-link">
                        <Link onClick={OpenModal} >Log out</Link>
                    </li> :   <li className="nav-link">
                        <Link onClick={OpenModal}>Log In</Link>
                    </li>}

                     <Modal   isOpen={ModalIsOpen} onRequestClose={closeModal} style={customStyles}>
                        <Signup />
                     </Modal>   
   
                </ul>
         
        
            </div>
       
             <div className="social text-gray">
           
              <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link ><i className="fab fa-instagram"></i></Link>
                <Link to="#"><i className="fab fa-twitter"></i></Link>
                <Link to="#"><i className="fab fa-youtube"></i></Link>  
            </div> 
        </div>
    </nav>
    )
}

export default Nav
