import React from 'react'

import { Route, BrowserRouter as Router } from 'react-router-dom'
import Footer2 from './Footer2'
import Home from "./Home"
import Nav from './Nav'
import PostPage from './PostPage'
import Signup from './Signup'
import Blog from "./Blog"
import About from './About'

function App() {
  return (
    
       <Router>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/post">
    <Nav/>
    <PostPage/>
   <Footer2 />
    
    </Route>
    <Route  path="/about">
      {/* <Nav /> */}
    <About/>
    </Route>
    <Route  path="/newpost">
      <Nav />
    <Blog />
    <Footer2 />
    </Route>
    
    </Router>
    
  )
}

export default App
