import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div>
      <h2>User {userid}</h2>
    </div>
  );
};

export default User;
