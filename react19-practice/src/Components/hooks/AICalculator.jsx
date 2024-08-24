import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Calculator</h1>
        <div className="bg-gray-200 p-4 rounded-lg mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent focus:outline-none"
          />
          <div className="text-right text-2xl font-bold">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("7")}
          >
            7
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("8")}
          >
            8
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("9")}
          >
            9
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("/")}
          >
            ÷
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("4")}
          >
            4
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("5")}
          >
            5
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("6")}
          >
            6
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("*")}
          >
            ×
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("1")}
          >
            1
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("2")}
          >
            2
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("3")}
          >
            3
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("-")}
          >
            -
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("0")}
          >
            0
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput(".")}
          >
            .
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4 text-xl font-bold"
            onClick={handleCalculate}
          >
            =
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-4 text-xl font-bold"
            onClick={() => handleInput("+")}
          >
            +
          </button>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-4 mt-4 w-full text-xl font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
