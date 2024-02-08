import React, { useState } from "react";
import { data } from "../data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(data);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Blogs Page</h2>

      <div>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article style={{ margin: "20px 5px" }}>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
