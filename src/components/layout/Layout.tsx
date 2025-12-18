"use client";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import BooksSection from '../sections/BooksSection/BooksSection';
import RoomsSection from "../sections/RoomSection/RoomsSection";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <main>
         <BooksSection />
         <RoomsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
