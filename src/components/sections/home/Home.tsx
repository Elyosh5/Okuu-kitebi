"use client";
import React from "react";
import Image from "next/image";
import scss from "./Home.module.scss";
import desktopOrn from "../../../assets/header/орнаменты.png";
import mobileOrn from "../../../assets/sections/mobileOrn.png";
import SearchIcon from "../../../assets/header/SearchIcon.png";

const Hero: React.FC = () => {
  return (
    <div className={scss.Hero}>
      <div className="container">
        <div className={scss.content}>
          <article className={scss.heroText}>
            <h1 className={scss.desktopHeader}>Издательский дом</h1>
            <h1 className={scss.mobileHeader}>
              Национальная библиотека имени Алыкула Осмонова
            </h1>

            <p>
              Сердце знаний и наследия кыргызского народа Храним прошлое.
              Формируем будущее
            </p>

            <div className={scss.searchWrapper}>
              <Image
                src={SearchIcon}
                alt="Search"
                className={scss.searchIcon}
              />
              <input type="text" placeholder="Поиск" />
            </div>
          </article>

          <div className={scss.logo}>
            <Image
              className={scss.desktopOrn}
              src={desktopOrn}
              alt="Okuu Kitebi Logo"
            />
            <Image
              className={scss.mobileOrn}
              src={mobileOrn}
              alt="Okuu Kitebi Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
