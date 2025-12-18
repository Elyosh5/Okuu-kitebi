"use client";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "../Main/home/Home";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
