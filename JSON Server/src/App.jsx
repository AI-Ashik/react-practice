import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    const data = response.data;
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h2>Data </h2>

      {data.map((data) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
          <p>{data.views}</p>
        </div>
      ))}
    </>
  );
}

export default App;
