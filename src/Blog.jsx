import React, { useEffect, useState } from 'react'
import { db, timestamp, projectStorage, auth } from './Firebase'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Modal from "react-modal"
import Signup from './Signup';
import Footer from './Footer';
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
  const [Class, setClass] = useState("hidden-validation")
  const [IsDisabled, setIsDisabled] = useState(false)

  
  function handleChange (e){
    
      if  (e.target.files[0]){
          setImage(e.target.files[0]);
      }
  }

  
// const handleUploada = (e) => {
//   e.preventDefault()

//   projectStorage.ref().constructor.prototype.putFiles = function(files) { 
//     var ref = this;
//     const list = Object.values(files)
//     console.log(list)
//     return Promise.all(
//       list.map(function(file) {
//       return ref.child(file.name).put(file)

//     })
//     );
//   }
  
//   // use it!
//   projectStorage.ref().putFiles(image).getDownloadURL().then(url=>console.log(url)).then(function(metadatas) {
    
//     // Get an array of file metadata
//   }).catch(function(error) {
//     // If any task fails, handle this
//   });
// }
  function handleUpload(e){
    setIsDisabled(true)
    if (image!="" && title!=initialState && body!=initialState && category!=initialState ){
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
                      }).then(setIsDisabled(false)
                      )
                              setProgress(0);
                              setImage(initialState);
                              setTitle(initialState);
                              setBody(initialState);
                              setCategory(initialState);
                              document.getElementById("formImage").value = "";
                              setClass("hidden-validation")
                  })
              }
  
          )
            }else{
              setClass("validation")
              setIsDisabled(false)
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
          <small className={Class}>please fill the empty fields</small>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <div>
                  <span className="formImage">
                     <input id="formImage"  type="file"  onChange={handleChange}  required/>
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
                    setBody(e.target.value) }} required />
                </div>
                
              </div>
            
              <div className="button">
              <button type="submit" onClick={handleUpload} disabled={IsDisabled}>
                 { 
              !IsDisabled ? "  Submit  " : "  Loading  "
              }
               <i class="fas fa-angle-right"></i></button>
               
              </div>
            </form>
          </div>
          </div>
          <Footer />
          </div>
      
       : <div className="contain">
         <h1 style={{padding: "28vh 10vh"}}><Link onClick={OpenModal} >Sign in </Link>To get access to this page</h1>
         <Modal   isOpen={ModalIsOpen} onRequestClose={closeModal} style={customStyles}>
            <Signup />
         </Modal>
         
         <Footer />

       </div>
    
    )
}

export default Blog