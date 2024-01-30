// import { useEffect, useState } from "react";

import WIndowWidth from "../windowWidth";

function App() {
  // const [resourceType, setResourceType] = useState("");
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  return (
    <>
      {/* <div>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h2>{resourceType}</h2>

      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })} */}

      <WIndowWidth />
    </>
  );
}

export default App;
