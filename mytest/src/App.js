import React, { useEffect, useState } from "react";
import './App.css';

import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() =>{
    const fetchPosts = async () =>{
      setLoading(true);
      const res = await fetch("http://jsonplaceholder.typicode.com/posts");
      const resJson = await res.json();
      setPosts(resJson);
      setLoading(false);
    }
    fetchPosts();
    
  },[])

const indexOfLastPost = currentPage * postsPerPage;
const indexOdFirstPost = 0;
const currentPosts = posts.slice(indexOdFirstPost, indexOfLastPost);

const loadHandler = () =>{
   setCurrentPage(pre => pre + 1);
}

  return (
    <div>
       <h1>My Blog</h1>
       <Posts posts={currentPosts} loading={loading}/>
       <button onClick={loadHandler}>load more</button>
    </div>
  );
}

export default App;
