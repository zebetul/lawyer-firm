import { Link } from "gatsby";
import React from "react";

const NavBar = () => (
  <nav className="sticky top-0 z-10 w-full flex justify-between py-5 px-5 text-sm text-white bg-black">
    <Link to="/">AVOCAT SIMONA OROS</Link>

    <div className="nav-links flex gap-2 text-white mr-0">
      <Link to="/despre">DESPRE</Link>

      <Link to="/servicii">SERVICII</Link>

      <Link to="/contact">CONTACT</Link>
    </div>
  </nav>
);

export default NavBar;
