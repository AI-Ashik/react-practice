import { useState } from "react";

const State1 = () => {
  // Use the useState hook to create a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Define a function to handle the button click
  const handleClick = () => {
    // Use the functional update form of setState to update the count twice
    setCount((prevCount) => prevCount + 1);
  };

  // Define a function to handle the button click
  const handleDecrement = () => {
    // Use the functional update form of setState to update the count twice
    setCount((prevCount) => prevCount - 1);
  };

  return (
    // Create a flexbox container to center the content vertically and horizontally
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Counter App</h1>

      {/* Display the current count */}
      <p className="text-2xl mb-4 text-gray-700">Count: {count}</p>

      {/* Button container */}
      <div className="space-x-4">
        {/* Button to increment the count */}
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow transition-colors duration-300"
        >
          Increment
        </button>

        {/* Button to decrement the count */}
        <button
          onClick={handleDecrement}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow transition-colors duration-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default State1;
