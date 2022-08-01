import React from "react";
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./Components/Main";
import Other from "./Components/Other";
import Posts from "./Components/Posts";
import PostList from "./Components/PostList";

function App() {
  return (
    <Router>
        <nav>
           <Link to = "/">Home</Link>
           <Link to = "/other">Other</Link>
           <Link to = "/posts">Posts</Link>
        </nav>
      <Routes>
         <Route path="/" element ={<Home />} />
         <Route path="/other" element ={<Other />} />
         <Route path="/posts" element ={<Posts />} >
             <Route path="/posts" element = {<PostList />} />
         </Route>
      </Routes>
    </Router>
  );
}

export default App;
