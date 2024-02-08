import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

const Blog = () => {
  const { title } = useParams();

  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const blogData = data.find((item) => item.title === title);
    if (blogData) {
      setBodyData(blogData.body);
    }
  }, [title]);

  return (
    <div>
      <h2>{title}</h2>
      <p>{bodyData}</p>
    </div>
  );
};

export default Blog;
