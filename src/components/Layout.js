import "../styles/global.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="layout mx-auto" style={{ maxWidth: 2000 }}>
    <NavBar />

    <div className="content">{children}</div>

    <Footer />
  </div>
);

export default Layout;
