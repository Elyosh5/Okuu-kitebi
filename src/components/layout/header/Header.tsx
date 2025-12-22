"use client";

import React from "react";
import scss from "./Header.module.scss";
import Image from "next/image";
import { Dropdown, Space, Typography } from "antd";
import type { MenuProps } from "antd";
import { MenuOutlined,DownOutlined } from "@ant-design/icons";

import SearchIcon from "../../../assets/header/SearchIcon.png";
import Eye from "../../../assets/header/Eyes.png";
import logo from "../../../assets/logo.png";

const { Link } = Typography;

const aboutItems: MenuProps["items"] = [
  { key: "1", label: <a href="#">О нас</a> },
  { key: "2", label: <a href="#">История создания и развития</a> },
  { key: "3", label: <a href="#">Галерея</a> },
  { key: "4", label: <a href="#">Миссия и ценности</a> },
  { key: "5", label: <a href="#">Команда</a> },
  { key: "6", label: <a href="#">Партнеры и сотрудничество</a> },
];

const catalogItems: MenuProps["items"] = [
  { key: "1", label: <a href="#">Направления</a> },
  { key: "2", label: <a href="#">Предметы</a> },
];

const newsItems: MenuProps["items"] = [
  { key: "1", label: <a href="#">Новости</a> },
  { key: "2", label: <a href="#">Публикации</a> },
];

const statsItems: MenuProps["items"] = [
  { key: "1", label: <a href="#">Список библиотек по КР по областям</a> },
  { key: "2", label: <a href="#">Коды школ</a> },
  {
    key: "3",
    label: <a href="#">Интерактивная карта школьных библиотек Кыргызстана</a>,
  },
];

const languagesItems: MenuProps["items"] = [
  { key: "kg", label: <a href="#">Кыргызский (KG)</a> },
  { key: "ru", label: <a href="#">Русский (RU)</a> },
];

const mobileItems: MenuProps["items"] = [
  { key: "about", label: "О нас", children: aboutItems },
  { key: "catalog", label: "Каталог учебников", children: catalogItems },
  { key: "news", label: "Новости и публикации", children: newsItems },
  { key: "stats", label: "Статистика", children: statsItems },
  { key: "lang", label: "Язык", children: languagesItems },
];

const Header: React.FC = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          
          <div className={scss.logo}>
            <Image src={logo} alt="Logo" width={90} height={56} priority />
          </div>

          <nav className={scss.navlinks}>
            <Dropdown menu={{ items: aboutItems }} trigger={["click"]}>
              <Link href="#">
                <Space>О нас</Space>
              </Link>
            </Dropdown>

            <Dropdown menu={{ items: catalogItems }} trigger={["click"]}>
              <Link href="#">
                <Space>Документация</Space>
              </Link>
            </Dropdown>

            <Dropdown menu={{ items: newsItems }} trigger={["click"]}>
              <Link href="#">
                <Space>FAQ</Space>
              </Link>
            </Dropdown>

            <Link href="#">НПА</Link>
            <Link href="#">Проекты</Link>

						<Dropdown menu={{ items: statsItems }} trigger={['click']}>
							<Link href="#">
								<Space>Новости</Space>
							</Link>
						</Dropdown>

            <Dropdown menu={{ items: statsItems }} trigger={["click"]}>
              <Link href="#">
                <Space>Библиотека <DownOutlined /></Space>
                
              </Link>
            </Dropdown>

						<Link href="#">Карта</Link>
					</nav>

          <div className={scss.buttonPanel}>
            <div className={scss.languageSwitcher}>
              <button className={scss.button}>Кырг</button>
              <button className={scss.button}>Рус</button>
            </div>

            <div className={scss.iconGroup}>
              <button className={scss.Sightbutton}>
                <Image src={Eye} alt="Eye" width={20} height={20} />
              </button>
              <button className={scss.Searchbutton}>
                <Image src={SearchIcon} alt="Search" width={20} height={20} />
              </button>
            </div>

            <div className={scss.burgerMenu}>
              <Dropdown menu={{ items: mobileItems }} trigger={["click"]}>
                <Link>
                  <MenuOutlined style={{ fontSize: 24, color: "#000" }} />
                </Link>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
