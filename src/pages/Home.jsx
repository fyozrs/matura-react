import React from "react";                      // React
import TopicCard from "../components/TopicCard"; // Only components used in this page

// CSS specific to Home or components used here
import "../css/Home.css";                        // Home-specific styles
import "../css/TopicCard.css";                    // if TopicCard styles are not global


function Home({ navOpen, searchQuery }) {
    const topics = [
        { id: 1, title: "1" },
        { id: 2, title: "2" },
        { id: 3, title: "3" },
        { id: 4, title: "4" },
    ];

    return (
        <div className="home">
            <main
                className="main-content"
                style={{
                    marginLeft: navOpen ? "200px" : "60px",
                    marginTop: "60px",
                    padding: "20px",
                    transition: "margin-left 0.3s",
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
            </main>
        </div>
    );
}

export default Home;
