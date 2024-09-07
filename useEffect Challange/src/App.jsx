import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">
          UseEffect Challenge
        </h1>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Count : {count}</h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 w-full"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <p className="mb-4 text-gray-500">Name : {input}</p>
          <input
            className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
            type="text"
            placeholder="Enter Name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
