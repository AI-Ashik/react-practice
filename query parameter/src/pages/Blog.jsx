import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();

  const { body } = location.state;

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Blog;
