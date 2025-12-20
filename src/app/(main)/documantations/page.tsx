"use client";
import Projects from "@/components/sections/projects/Projects";
import scss from "./page.module.scss";
import Contact from "@/components/sections/contact/Contact";

const page = () => {
  return (
    <div className={scss.page}>
      <div className="container">
        <div className={scss.content}>
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default page;
