import { useState } from "react";

const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleSetUser = () => {
    // Example user data
    const newUser = { name: "John Doe", email: "john.doe@example.com" };
    setUser(newUser);
    setIsLoggedIn(true);
  };

  const handleClearUser = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Short Circuit Evaluation
      </h1>

      {isLoggedIn ? (
        <p className="text-lg text-gray-700 mb-6">
          You Are Logged In as {user?.name}
        </p>
      ) : (
        <p className="text-lg text-gray-700 mb-6">You Are Not Logged In</p>
      )}

      <div className="flex space-x-4">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {isLoggedIn ? <span>Log Out</span> : <span>Log In</span>}
        </button>
        <button
          onClick={handleSetUser}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Set User
        </button>
        <button
          onClick={handleClearUser}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Clear User
        </button>
      </div>
    </section>
  );
};

export default ShortCircuit;
