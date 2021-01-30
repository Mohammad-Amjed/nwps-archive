import React from 'react'

import { Route, BrowserRouter as Router } from 'react-router-dom'
import Footer2 from './Footer2'
import Home from "./Home"
import Nav from './Nav'
import PostPage from './PostPage'
import Signup from './Signup'

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
    <Route  path="/Signup">
    <Signup />
    </Route>
    
    </Router>
    
  )
}

export default App
