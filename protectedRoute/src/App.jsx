import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Protected from "./Protected";
import AddBlog from "./pages/AddBlog";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <NavBar />

      {isLoggedIn ? (
        <button onClick={handleClick}>Login</button>
      ) : (
        <button onClick={handleClick}>Log Out</button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/add-blog"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <AddBlog />
            </Protected>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
