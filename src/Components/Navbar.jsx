import React, { memo } from "react";
import { useLocation } from "react-router";
import { NavList, LinkStyled } from "./Navstyle";

const Links = [
  { to: "/", name: "Home" },
  { to: "/starred", name: "Starred" }
];

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <NavList>
        {Links.map((item) => (
          <li>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? "active" : ""}
            >
              {item.name}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}
export default memo(Navbar);
