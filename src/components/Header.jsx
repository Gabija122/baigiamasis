import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="hederis">
      
      <nav className="navas">
        <ul className="mygtukai">
          <Link to="/">
            <li className="mygtukas">Home</li>
          </Link>
          <Link to="/aboutus">
            <li className="mygtukas">About Us</li>
          </Link>
          <Link to="/news">
            <li className="mygtukas">News</li>
          </Link>
          <Link to="/contacts">
            <li className="mygtukas">Contact Us</li>
          </Link>
          <Link to="/greetings">
            <li className="mygtukas">Greetings</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;