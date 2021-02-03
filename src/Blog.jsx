import React, { useState } from 'react'
import { db, timestamp, projectStorage } from './Firebase'
import { v4 as uuidv4 } from 'uuid';
function Blog() {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0)
  
  function handleChange (e){
      if  (e.target.files[0]){
          setImage(e.target.files[0]);
      }
  }
  function handleUpload(){
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
                  .then(url => {
                    
                      db
                      .collection("posts")
                      .doc(uuidv4())
                      .set({
                        body,
                        image: url,
                        title,
                        date:timestamp(),
                      }).then()
                              setProgress(0);
                              setImage(null);
                  })
              }
  
          )
    
  }
  const initialState = ""
  const [date, setDate] = useState(initialState)
  const [body, setBody] = useState(initialState)
 
  const [title, setTitle] = useState(initialState)
  
  


  
    return (
      <div className="blogBody">
        <div className="blogBox">
          <div className="title">Post Details</div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                     <input type="file" onChange={handleChange} />

                </div>
               
                <div className="input-box">
                  <span className="details">Title</span>
                  <input className="input" type="text" placeholder="Post Title" onChange={(e)=>{
                    setTitle(e.target.value)
                  }} required />
                </div>
                
                <div className="input-box">
                  <span className="details">Body</span>
                  <textarea className="body-area" type="text" placeholder="Post Text"  onChange={(e)=>{
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
      
     
    
    )
}

export default Blog
