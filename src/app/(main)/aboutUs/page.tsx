import Map from "@/components/features/map/Map";
import scss from "./page.module.scss";
import Contact from "@/components/sections/contact/Contact";

const page = () => {
  return (
    <div className={scss.page}>
      <div className="container">
        <div className={scss.content}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default page;
