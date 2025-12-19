"use client";
import Contact from "../sections/contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import FAQ from "../sections/faq/faq";
import Hero from "../sections/hero/Hero";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main className="main">
        <Hero />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
