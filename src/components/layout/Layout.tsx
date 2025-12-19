"use client";
import Contact from "../sections/contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import BooksSection from '../sections/BooksSection/BooksSection';
import RoomsSection from "../sections/RoomSection/RoomsSection";
import Home from "../Main/home/Home";
import FAQ from "../Main/faq/Faq";
import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header 
      <main className="main">
         <BooksSection />
         <RoomsSection />
        <Home />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
