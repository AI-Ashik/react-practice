import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import AddBlog from "./pages/AddBlog";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
