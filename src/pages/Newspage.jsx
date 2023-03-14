import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Newspage.css";

function Newspage() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responsejson) => setPosts(responsejson));
  }, []);

  return (
    <div className="container">
      
      <Header />
      <div className="news-container">
        <h1 className="news-antraste">Puslapio naujienos</h1>
        <div className="naujienos">
        
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Newspage;