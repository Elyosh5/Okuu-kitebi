"use client";
import Contact from "../sections/contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main className="main">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
