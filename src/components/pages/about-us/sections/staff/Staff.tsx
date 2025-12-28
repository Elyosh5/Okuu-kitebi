'use client'
import { useEffect, useRef, type FC } from 'react';
import styles from './Staff.module.scss';
import staff1Im from '@/assets/sections/about-us/3.png'
import NextImage from 'next/image';
import type { StaticImageData } from 'next/image'; 

interface Staff {
  id: number;
  name: string;
  title: string;
  description: string;
  image: StaticImageData; 
}

const staffs: Staff[] = [
   {
    id: 1,
    name: 'Жибек Уланова',
    title: 'Директор',
    description: 'За каждой цифрой — реальные истории, поездки, учеба и успехи наших клиентов по всему миру',
    image: staff1Im
   },
   {
    id: 2,
    name: 'Улан Кайыров',
    title: 'Учитель',
    description: 'За каждой цифрой — реальные истории, поездки, учеба и успехи наших клиентов по всему миру',
    image: staff1Im
   },
   {
    id: 3,
    name: 'Алиш Мырзаев',
    title: 'Админ',
    description: 'За каждой цифрой — реальные истории, поездки, учеба и успехи наших клиентов по всему миру',
    image: staff1Im
   },
   {
    id: 4,
    name: 'Каным Турганова',
    title: 'Помощник',
    description: 'За каждой цифрой — реальные истории, поездки, учеба и успехи наших клиентов по всему миру',
    image: staff1Im
   }
]

export const Staff: FC = () => {

  const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
  };

  const slider = sliderRef.current;
  if (slider) {
    slider.addEventListener('wheel', handleWheel, { passive: false });
  }

  return () => {
    if (slider) {
      slider.removeEventListener('wheel', handleWheel);
    }
  };
}, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

    return (
        <section className={styles.Staff}>
            <div className='container'>
                <div className={styles.content}>
                    <h2 className={styles.title}>НАШИ CОТРУДНИКИ</h2>
                    <div className={styles.sliderWrapper}>
                    <div className={styles.btn}>
                        <button className={`${styles.arrow} ${styles.prev}`} onClick={scrollLeft}>
                            <span>‹</span>
                        </button>
                        <button className={`${styles.arrow} ${styles.next}`} onClick={scrollRight}>
                            <span>›</span>
                        </button>
                    </div>
                    <div  ref={sliderRef} className={styles.staffGrid}>
                        {staffs.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <div className={styles.left}>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <h3 className={styles.name}>{item.name}</h3>
                                </div>
                                <div className={styles.staffPhoto}>
                                    <NextImage
                                        src={item.image}
                                        alt={item.name}
                                        className={styles.image}
                                    />    
                                </div>
                                <div className={styles.right}>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
