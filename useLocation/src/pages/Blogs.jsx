// Blogs Component
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
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article style={{ margin: "20px 5px" }} key={id}>
              <h2>{title}</h2>
              <p>{truncateString(body, 100)}</p>
              <Link to={`/blogs/${title}`} state={{ title, body }}>
                Learn More
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
