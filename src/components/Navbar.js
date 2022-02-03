import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <Link to="/">
        <a>Home</a>
      </Link>
      <Link to="/about">
        <a>About</a>
      </Link>
      <Link to="/characters">
        <a>Characters</a>
      </Link>
    </nav>
  );
};

export default Navbar;
