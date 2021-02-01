import React, { useState } from 'react'
import { db, timestamp } from './Firebase'
import { v4 as uuidv4 } from 'uuid';
import ProgressBar from './ProgressBar';
// import "./css/Blog.css"

function Blog() {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  }
;
  const initialState = ""
  const [date, setDate] = useState(initialState)
  const [body, setBody] = useState(initialState)
  const [image, setImage] = useState(initialState)
  const [title, setTitle] = useState(initialState)
  const id = uuidv4();
  console.log(id)
  const save = () => {
    setDate(timestamp)
    
    db
      .collection("posts")
      .doc(uuidv4())
      .set({
        body,
        image,
        title,
        date,
      })
      .then();
};

  
    return (
      <div className="blogBody">
        <div className="blogBox">
          <div className="title">Post Details</div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                <label>
                  <input type="file" onChange={handleChange} />
                  <span>+</span>
                </label>
                <div className="output">
                  { error && <div className="error">{ error }</div>}
                  { file && <div>{ file.name }</div> }
                  { file && <ProgressBar file={file} setFile={setFile} /> }
                </div>
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
                <button type="submit" onClick={save}> Sumbit  <i class="fas fa-angle-right"></i></button>
              </div>
            </form>
          </div>
          </div>
          </div>
      
     
    
    )
}

export default Blog
