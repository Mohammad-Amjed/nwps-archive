import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import PostPage from './PostPage';
import Footer from './Footer';
import Footer2 from './Footer2';
import SidePosts from './SidePosts';
import Signup from './Signup';




ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route exact path="/">
    <App />
    </Route>
    <Route path="/post">
    <Nav/>
    <PostPage/>
   <Footer2 />
    
    </Route>
    <Route  path="/Signup">
    <Signup />
    </Route>
    
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
