import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import "./css/App.css";
import "./css/TopicCard.css";

function App() {
  const [navOpen, setNavOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SideNav isOpen={navOpen} toggleNav={toggleNav} />

      <main
        className={`main-content ${navOpen ? "nav-open" : "nav-closed"}`}
      >
        <Routes>
          <Route
            path="/"
            element={<Home searchQuery={searchQuery} />}
          />
          <Route
            path="/Favorites"
            element={<Favorites />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
