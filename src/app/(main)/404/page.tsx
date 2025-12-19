import Image from "next/image";
import scss from "./page.module.scss";
import img from "../../../assets/404/404.png";
import Link from "next/link";

const page = () => {
  return (
    <div className={scss.NotFound}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <p>Страница не найдена</p>
            <h1>
              Когда-то здесь была страница, но её не успели архивировать :(
            </h1>
            <span>404</span>
            <Link href="/">На главную</Link>
          </div>
          <Image src={img} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default page;
