'use client'
import type { FC } from 'react';
import styles from './Achievement.module.scss';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image?: string; 
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "СОХРАНЕНИЕ РЕДКИХ РУКОПИСЕЙ И ИЗДАНИЙ",
    description: "Библиотека собрала и сохранила тысячи уникальных книг, газет и рукописей, часть которых имеет историческую и культурную ценность мирового уровня"
  },
  {
    id: 2,
    title: "ЦИФРОВИЗАЦИЯ ФОНДОВ",
    description: "Запущена программа оцифровки редких документов и книжных коллекций, что позволяет удалённо работать с материалами и сохранять их для будущих поколений",
    image: "/images/digitalization.jpg"
  },
  {
    id: 3,
    title: "НАУЧНО-ОБРАЗОВАТЕЛЬНЫЕ ПРОЕКТЫ",
    description: "Регулярно организует выставки, научные конференции и лекции, которые объединяют учёных, студентов и исследователей со всей страны"
  },
  {
    id: 4,
    title: "МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО",
    description: "Заключены соглашения с зарубежными библиотеками и архивами для обмена опытом, фондами и совместных культурных программ"
  },
  {
    id: 5,
    title: "ДОСТУПНОСТЬ И ОТКРЫТОСТЬ",
    description: "Внедрены современные сервисы — онлайн-каталоги, электронные читальные залы и программы для людей с ограниченными возможностями"
  }
];

export const achievement: FC = () => {
    return (
        <section className={styles.achievement}>
            <div className='container'>
                <div className={styles.content}>
                    <h2 className={styles.title}>НАШИ ДОСТИЖЕНИЯ</h2>
                    <div className={styles.grid}>
                        {achievements.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.number}>{String(item.id).padStart(2, '0')}</div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            {item.image ? (
                            <img src={item.image} alt={item.title} className={styles.image} />
                            ) : (
                            <p className={styles.description}>{item.description}</p>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
