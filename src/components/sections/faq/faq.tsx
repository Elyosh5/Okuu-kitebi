"use client";

import React, { useState } from "react";
import Image from "next/image";
import scss from "./faq.module.scss";
import plusIcon from "../../../assets/sections/openIcon.png";
import closeIcon from "../../../assets/sections/closeIcon.png";

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const label =
    "Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit congue";
  const text =
    "Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit congue. Id quis sit lobortis amet in et. At nibh proin non ut vulputate id amet eu massa. Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit";

  const faqItems: FaqItem[] = [
    { question: label, answer: text },
    { question: label, answer: text },
    { question: label, answer: text },
  ];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={scss.Faq}>
      <div className="container">
        <div className={scss.content}>
          <h2>FAQs</h2>

          <ul className={scss.faqList}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <li key={index} className={scss.faqItem}>
                  <button
                    type="button"
                    className={`${scss.faqQuestion} ${isOpen ? scss.open : ""}`}
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>

                    <span className={scss.icon}>
                      <Image
                        src={isOpen ? closeIcon : plusIcon}
                        alt={isOpen ? "Close" : "Open"}
                        width={20}
                        height={20}
                        className={scss.iconImage}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className={scss.faqAnswer}>{item.answer}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
