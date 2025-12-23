'use client';
import type { FC } from 'react';
import scss from './News.module.scss';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import newsOne from '@/assets/news/news-1.png';
import newsTwo from '@/assets/news/news-2.png';
import newsThree from '@/assets/news/news-3.png';
import newsFoo from '@/assets/news/news-4.png';
import newsFive from '@/assets/news/news-5.png';

interface NewsItem {
	id: number;
	date: string;
	title: string;
	description: string;
	imageUrl: StaticImageData;
}
const newsData: NewsItem[] = [
	{
		id: 1,
		date: '12.21.2004',
		title:
			'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
		description:
			'Nisi orci vulputate nisl viverra sit congue. Id quis sit lobortis amet in et. At nibh proin non ut vulputate id amet...',
		imageUrl: newsOne
	},
	{
		id: 2,
		date: '12.21.2004',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description:
			'Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit congue',
		imageUrl: newsTwo
	},
	{
		id: 3,
		date: '12.21.2004',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description:
			'Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit congue',
		imageUrl: newsThree
	},
	{
		id: 4,
		date: '12.21.2004',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description:
			'Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit congue',
		imageUrl: newsFoo
	},
	{
		id: 5,
		date: '12.21.2004',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description:
			'Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl viverra sit congue',
		imageUrl: newsFive
	}
];

export const News: FC = () => {
	const leftNews = newsData[0];
	const rightNews = newsData.slice(1);

	return (
		<section className={scss.News}>
			<div className="container">
				<div className={scss.content}>
					<h1 className={scss.news_title}>Новости</h1>
					<div className={scss.news_container}>
						<div className={scss.left} key={leftNews.id}>
							<Image
								className={scss.newsOne}
								src={leftNews.imageUrl}
								alt={leftNews.date}
							/>
							<span className={scss.date}>{leftNews.date}</span>
							<h1 className={scss.title}>{leftNews.title}</h1>
							<p className={scss.text}>{leftNews.description}</p>
						</div>
						<div className={scss.right}>
							{rightNews.map((item) => (
								<div key={item.id} className={scss.news_box}>
									<div className={scss.img_container}>
										{' '}
										<span className={scss.date}>{item.date}</span>
										<Image
											className={scss.img_wrapper}
											src={item.imageUrl}
											alt={item.title}
										/>
									</div>
									<div className={scss.text_info}>
										<h1 className={scss.title}>{item.title}</h1>
										<p className={scss.news_text}>{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className={scss.news_button}>
						<button className={scss.btn}>Ещё</button>
					</div>
				</div>
			</div>
		</section>
	);
};
