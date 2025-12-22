import Home from "@/components/sections/home/Home";
import BooksSection from "@/components/sections/BooksSection/BooksSection";
import RoomsSection from "@/components/sections/RoomSection/RoomsSection";
import FAQ from "@/components/sections/faq/faq";
import Contact from "@/components/sections/contact/Contact";

const page = () => {
  return (
    <>
      <Home />
      <BooksSection />
      <RoomsSection />
      <FAQ />
      <Contact />
    </>
  );
};

export default page;
