import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetForm from "./TweetForm";
import Post from "./Post";
import db from "./firebase";
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
    }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="header__text">Home</h2>
      </div>
      <TweetForm />
      {posts.map((post) => (
        <Post
          name={post.name}
          image={post.image}
          text={post.text}
          picture={post.picture}
        />
      ))}
    </div>
  );
}

export default Feed;
