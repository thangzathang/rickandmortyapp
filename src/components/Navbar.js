import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={require("../images/rickandmorty.png")} width={260} height={95} alt="Rick and Morty logo" />
        </Link>
      </div>
      <Link to="/">
        <a href="/">Home</a>
      </Link>
      <Link to="/about">
        <a href="/about">About</a>
      </Link>
      <Link to="/characters">
        <a href="characters">Characters</a>
      </Link>
    </nav>
  );
};

export default Navbar;
