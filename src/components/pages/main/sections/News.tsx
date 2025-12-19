'use client';
import type { FC } from 'react';
import scss from './News.module.scss';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import newsOne from '@/assets/news-1.png';
import newsTwo from '@/assets/news-2.png';
import newsThree from '@/assets/news-3.png';
import newsFoo from '@/assets/news-4.png';
import newsFive from '@/assets/news-5.png';

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
		description: 'Nisi orci vulputate nisl viverra sit congue.',
		imageUrl: newsTwo
	},
	{
		id: 3,
		date: '12.21.2004',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description: 'Nisi orci vulputate nisl viverra sit congue.',
		imageUrl: newsThree
	},
	{
		id: 4,
		date: '12.21.2004',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description: 'Nisi orci vulputate nisl viverra sit congue.',
		imageUrl: newsFoo
	},
	{
		id: 5,
		date: '12.21.2004',
		title: 'Lorem ipsum dolor sit amet consectetur',
		description: 'Nisi orci vulputate nisl viverra sit congue.',
		imageUrl: newsFive
	}
];

export const News: FC = () => {
	const leftNews = newsData[0];
	const rightNews = newsData.slice;
	1;

	return (
		<section className={scss.News}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left} key={leftNews.id}>
						<Image src={leftNews.imageUrl} alt={leftNews.title} />
					</div>
					<div className={scss.right}></div>
				</div>
			</div>
		</section>
	);
};
