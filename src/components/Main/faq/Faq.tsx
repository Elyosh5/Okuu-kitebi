import React from "react";
import { Collapse } from "antd";
import style from "./Faq.module.scss";
import { PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const label: string =
  "Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit congue";
const paragraph: string =
  "Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit congue.Id quis sit lobortis amet in et.";

const faqItems: FaqItem[] = [
  { id: 1, question: label, answer: paragraph },
  { id: 2, question: label, answer: paragraph },
  { id: 3, question: label, answer: paragraph },
  { id: 4, question: label, answer: paragraph },
  { id: 5, question: label, answer: paragraph },
];

const Faq: React.FC = () => {
  const panelStyle: React.CSSProperties = {
    minHeight: "80px",
    marginBottom: 20,
    background: "#F2F2F7",
    borderRadius: 16,
    border: "1px solid #F2F2F7",
    padding: "10px 16px",
  };

  // Создаём массив items для Collapse
  const items = faqItems.map((item) => ({
    key: item.id,
    label: item.question,
    children: <p style={{ margin: 0 }}>{item.answer}</p>,
    style: panelStyle,
  }));

  return (
    <section className={style.faq}>
      <div className={style.container}>
        <h1 style={{ marginBottom: "40px" }}>FAQ</h1>
        <Collapse
          className={style.header}
          bordered={false}
          style={{ width: "100%" }}
          expandIconPlacement="end" 
          expandIcon={({ isActive }) => (
            <span className={style.icon}>
              {isActive ? <CloseCircleOutlined /> : <PlusCircleOutlined />}
            </span>
          )}
          items={items} 
        />
      </div>
    </section>
  );
};

export default Faq;
