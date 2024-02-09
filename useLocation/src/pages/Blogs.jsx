import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Blogs Page</h2>

      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => {
            const { id, title, body } = post; // Destructure post object here
            return (
              <li key={id}>
                <h2>{truncateString(title, 50)}</h2>
                <p>{truncateString(body, 50)}</p>
                <Link to={title} state={{ title, body }}>
                  Learn More...
                </Link>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
