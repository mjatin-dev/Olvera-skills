import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="app_container">
      <NavBar />
      <main>{children}</main>;
      <Footer />
    </div>
  );
}

export default Layout;
