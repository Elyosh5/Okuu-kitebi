import Image from "next/image";
import scss from "./Footer.module.scss";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import {
  FaceBookSvg,
  GeeksSvg,
  InstagramSvg,
  WhatsAppSvg,
} from "@/assets/Svgs";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <main className={scss.content}>
          <li>
            <Image className={scss.logo} alt="logo" src={logo} />
            <h3>Библиотекарям</h3>
            <Link href="/vacancies">Вакансии</Link>
          </li>
          <li>
            <h2>Страницы</h2>
            <Link href="aboutUs"> О нас</Link>
            <Link href="libraries">Библиотеки</Link>
            <Link href="news"> Новости</Link>
            <Link href="readers"> Читателям</Link>
            <Link href="halls"> Залы</Link>
            <Link href="maps">Карта</Link>
          </li>
          <li>
            <h2>Контакты</h2>
            <Link href="aboutUs">werminnk@gmail.com</Link>
            <Link href="libraries">+996 703 94 72 76</Link>
            <Link href="news">г.Бишкек, Ибраимова 109/3</Link>
          </li>
          <li className={scss.socials}>
            <Link href="">
              <FaceBookSvg />
            </Link>
            <Link href="">
              <WhatsAppSvg />
            </Link>
            <Link href="">
              <InstagramSvg />
            </Link>
          </li>
        </main>
        <div className={scss.border}></div>
        <div className={scss.bottom}>
          <p>MADE BY GEEKS</p>
          <GeeksSvg />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
