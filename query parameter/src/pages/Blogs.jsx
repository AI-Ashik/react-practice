import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(data);

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
          {blogs.map((post) => {
            const { id, title, body } = post; // Destructure post object here
            return (
              <li key={id}>
                <h2>{truncateString(title, 50)}</h2>
                <p>{truncateString(body, 50)}</p>
                <Link to={title} state={{ title, body }}>
                  Learn More...
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
