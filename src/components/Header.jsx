import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="hederis">
      
      <nav className="navas">
        <ul className="mygtukai">
          <li className="lielem"><Link className="mygtukas" to="/">Home</Link></li>
          <li className="lielem"><Link className="mygtukas" to="/aboutus">About Us</Link></li>
          <li className="lielem"><Link className="mygtukas" to="/contacts">Darbuotojai</Link></li>
          <li className="lielem"><Link className="mygtukas" to="/news">News</Link></li>
          <li className="lielem"><Link className="mygtukas" to="/kita">Kita</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;