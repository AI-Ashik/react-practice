import { useState } from "react";

const UseStateChallangeOne = () => {
  const data = [
    { name: "Alice", age: 19 },
    { name: "Kirito", age: 19 },
    { name: "Asuna", age: 19 },
  ];
  const [users] = useState(data);
  return (
    <>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h1>Name : {user.name}</h1>
            <p>Age : {user.age}</p>
          </div>
        );
      })}
    </>
  );
};

export default UseStateChallangeOne;
