import React from "react";
import { Link } from "react-router-dom";

const Links = [
  { to: "/", name: "Home" },
  { to: "about", name: "About" }
];

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          {Links.map((item) => (
            <li>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
