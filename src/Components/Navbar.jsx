import React from "react";
import { Link } from "react-router-dom";

const Links = [
  { to: "/", name: "Home" },
  { to: "/starred", name: "Starred" }
];

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        {Links.map((item) => (
          <li>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
