"use client";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "../Main/home/Home";
import FAQ from "../Main/faq/Faq";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <main>
        <Home />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
