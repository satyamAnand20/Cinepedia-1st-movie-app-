import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./Pages/home";
import Navbar from "./components/Navbar";
import Favourites from "./Pages/Favourites";

import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favourites" element={<Favourites></Favourites>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
