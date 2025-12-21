import "./css/App.css"
import "./css/TopicCard.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import SideNav from "./components/SideNav";
import TopicCard from "./components/TopicCard";


function App() {

  const [navOpen, setNavOpen] = useState(true);

  const toggleNav = () => setNavOpen(!navOpen);

  const [searchQuery, setSearchQuery] = useState("");

  const topics = [
    { id: 1, title: "1" },
    { id: 2, title: "2" },
    { id: 3, title: "3" },
    { id: 4, title: "4" },
  ];

  return (
    <div>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SideNav isOpen={navOpen} toggleNav={toggleNav} />

      <main className="main-content"
        style={{
          marginLeft: navOpen ? "200px" : "60px", // dynamic margin
          marginTop: "60px", // height of navbar
          padding: "20px",
          transition: "margin-left 0.3s", // smooth transition
        }}
      >
        <div className="topics-grid">
          {topics
            .filter((topic) =>
              topic.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            )
            .map((topic) => (
              <TopicCard topic={topic} key={topic.id} />
            ))}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
