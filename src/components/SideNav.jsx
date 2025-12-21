import React from "react";

import "../css/SideNav.css";


const SideNav = ({ isOpen, toggleNav }) => {
    const links = ["topic 1", "topic 2", "topic 3"];

    return (
        <aside className={`sidenav ${isOpen ? "open" : "closed"}`}>
            {/* Toggle button */}
            <button className="toggle-btn" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <ul>
                <div className="links-tab-active">
                </div> {links.map((link, index) =>
                (<li key={index}>
                    {/* Show full text if open, number only if closed */} {
                        isOpen ? link : index + 1} </li>))}
            </ul>

        </aside>
    );
};

export default SideNav;
