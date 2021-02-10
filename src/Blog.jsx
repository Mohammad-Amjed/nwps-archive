import React, { useEffect, useState } from 'react'
import { db, timestamp, projectStorage, auth } from './Firebase'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Modal from "react-modal"
import Signup from './Signup';
function Blog() {
  const initialState = ""
  const [date, setDate] = useState(initialState)
  const [body, setBody] = useState(initialState)
  const [title, setTitle] = useState(initialState)
  const [category, setCategory] = useState(initialState)
  const [id, setId] = useState("id")
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0)
  const [userName, setUserName] = useState(null)
  const [user, setUser] = useState(null)
  const [ModalIsOpen, setModalIsOpen] = useState(false)
  
  
  function handleChange (e){
    
      if  (e.target.files[0]){
          setImage(e.target.files[0]);
      }
  }
  function handleUpload(e){
    e.preventDefault()
    const uploadTask =  projectStorage.ref(`images/${image.name}`).put(image)
      uploadTask.on(
          "state_changed",
          (snapshot) => {
              const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) *  100
               );
              setProgress(progress);
  
             },
             (error) => {
              console.log(error);
              alert(error.message);
              },
              () => {
                  projectStorage
                  .ref("images")
                  .child(image.name)
                  .getDownloadURL()
                  .then(setId(uuidv4())).then(
                    url => {
                    
                      db
                      .collection("posts")
                      .doc(uuidv4())
                      .set({
                        body,
                        image: url,
                        title,
                        category,
                        date:timestamp(),
                        admin: userName,
                        id:uuidv4()
                      }).then(console.log("done")
                      )
                              setProgress(0);
                              setImage(initialState);
                              setTitle(initialState);
                              setBody(initialState);
                              setCategory(initialState);
                              document.getElementById("formImage").value = "";
                  })
              }
  
          )
    
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
      user ? 
      <div className="blogBody">
        <div className="blogBox">
          <h2>Hello {userName}</h2>
          <div className="title">Post Details</div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <div>
                  <span className="formImage">
                     <input id="formImage"  type="file"  onChange={handleChange} />
                     <span>Add an image</span>
                     </span>
                <span> &nbsp;{image.name}</span>
                </div>
                </div>
               
                <div className="input-box">
                  <span className="details">Title</span>
                  <input className="input" type="text" placeholder="Post Title" value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                  }} required />
                </div>
                <div className="input-box">
                  <span className="details">Category</span>
                  <input className="input" type="text" placeholder="Post Category" value={category} onChange={(e)=>{
                    setCategory(e.target.value)
                  }} required />
                </div>
                
                <div className="input-box">
                  <span className="details">Body</span>
                  <textarea className="body-area" type="text"value={body} placeholder="Post Text"  onChange={(e)=>{
                    setBody(e.target.value) }}required />
                </div>
                
              </div>
            
              <div className="button">
                <button type="submit" onClick={handleUpload}> Sumbit  <i class="fas fa-angle-right"></i></button>
               
              </div>
            </form>
          </div>
          </div>
          </div>
      
       : <div className="contain">
         <h1 style={{padding: "28vh 10vh"}}><Link onClick={OpenModal} >Sign in </Link>To get access to this page</h1>
         <Modal   isOpen={ModalIsOpen} onRequestClose={closeModal} style={customStyles}>
            <Signup />
         </Modal>
        
       </div>
    
    )
}

export default Blog
