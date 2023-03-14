import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="hederis">
      
      <nav className="navas">
        <ul className="mygtukai">
          <li className="lielem"><Link className="mygtukas" to="/">Pagrindinis</Link></li>
          <li className="lielem"><Link className="mygtukas" to="/aboutus">Apie mus</Link></li>
          <li className="lielem"><Link className="mygtukas" to="/contacts">Darbuotojai</Link></li>
          <li className="lielem"><Link className="mygtukas" to="/news">Naujienos</Link></li>
          <li className="lielem"><Link className="mygtukas" to="/kita">Daugiau</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;