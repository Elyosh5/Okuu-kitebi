"use client";
import Contact from "../sections/contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "../Main/home/Home";
import FAQ from "../Main/faq/Faq";
import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main className="main">
        <Home />
        <FAQ />
        <Contact />
      </main>
      <Footer />
</div>
  );
};

export default Layout;
