"use client";
import Home from "@/components/sections/home/Home";
import BooksSection from "@/components/sections/BooksSection/BooksSection";
import RoomsSection from "@/components/sections/RoomSection/RoomsSection";
import Contact from "@/components/sections/contact/Contact";
import Faq from "@/components/sections/faq/faq";

const page = () => {
  return (
    <>
      <Home />
      <BooksSection />
      <RoomsSection />
      <Faq />
      <Contact />
    </>
  );
};

export default page;
