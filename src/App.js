import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./Home"
import Nav from './Nav'
import PostPage from './PostPage'
import Blog from "./Blog"
import About from './About'
import Footer from './Footer'
import Click from './Click'

function App() {
  return (
    
       <Router>
    <Route exact path="/">
    <Click />
    <Home />
    </Route>

    <Route path="/post">
    <Click />
    <Nav/>
    <PostPage/>
   
    </Route>
    
    <Route  path="/about">
    <Click />
    <About/>
    </Route>

    <Route  path="/newpost">
    <Click />
      <Nav />
    <Blog />
    
    </Route>

    </Router>
    
  )
}

export default App
