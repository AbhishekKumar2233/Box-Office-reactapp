import React from "react";
import { NavList, LinkStyled } from "./Navstyle";

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
            <LinkStyled to={item.to}>{item.name}</LinkStyled>
          </li>
        ))}
      </ul>
    </div>
  );
}
