import React from "react";
import style from "./Home.module.scss";
import Image from "next/image";
import DesktopLogo from "../../../assets/header/орнаменты.png";
import MobileLogo from "../../../assets/header/mobilelogo.png";
import Icon from "../../../assets/header/SearchIcon.png";

const Home: React.FC = () => {
  return (
    <section className={style.hero} style={{ paddingTop: "138px" }}>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.titleDesktop}>Издательский дом</h1>
          <h1 className={style.titleMobile}>
            Национальная библиотека имени Алыкула Осмонова
          </h1>

          <p className={style.subtitle}>
            Сердце знаний и наследия кыргызского народа. <br />
            Храним прошлое. Формируем будущее.
          </p>

          <div className={style.searchWrapper}>
            <div className={style.icon}>
              <Image src={Icon} alt="Search icon" width={20} height={20} />
            </div>
            <input className={style.input} placeholder="Поиск" />
          </div>
        </div>

        <div className={style.image}>
          <Image
            className={style.desktopLogo}
            src={DesktopLogo}
            alt="desktop logo"
            priority
          />
          <Image
            className={style.mobileLogo}
            src={MobileLogo}
            alt="mobile logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
