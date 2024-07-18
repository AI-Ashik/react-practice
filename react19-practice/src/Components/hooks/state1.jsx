import { useState } from "react";

const State1 = () => {
  // Use the useState hook to create a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Define a function to handle the button click
  const handleClick = () => {
    // Use the functional update form of setState to update the count twice
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    // Create a flexbox container to center the content vertically and horizontally
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>

      {/* Display the current count */}
      <p className="text-2xl mb-4">Count: {count}</p>

      {/* Button to increment the count */}
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
      >
        Increment
      </button>
    </div>
  );
};

export default State1;
