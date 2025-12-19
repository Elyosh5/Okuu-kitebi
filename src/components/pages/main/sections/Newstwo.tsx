'use client';
import Image from 'next/image';
import type { FC } from 'react';
import scss from './Newstwo.module.scss';
import newsOne from '@/assets/news-1.png';
import newsTwo from '@/assets/news-2.png';
import newsThree from '@/assets/news-3.png';

export const News: FC = () => {
	return (
		<section className={scss.News}>
			<div className="container">
				<div className={scss.content}>
					<h1 className={scss.title}>Новости</h1>
					<div className={scss.news_box}>
						<div className={scss.left}>
							<Image src={newsOne} alt="news-1" />
							<h1 className={scss.subtitle}>
								Lorem ipsum dolor sit amet consectetuLorem ipsum dolor sit amet
								consectetu
							</h1>
							<p className={scss.text}>
								Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate nisl
								viverra sit congue. Id quis sit lobortis amet in et. At nibh
								proin non ut vulputate id amet eu massa.Lorem ipsum dolor sit
								amet.
							</p>
						</div>
						<div className={scss.right}>
							<div className={scss.top}>
								<div className={scss.top_left}>
									<Image src={newsTwo} alt="news-1" />
									<h1 className={scss.title}>
										Lorem ipsum dolor sit amet consectetu
									</h1>
									<p className={scss.text}>
										Lorem ipsum dolor sit amet consectetur. Nisi orci vulputate
										nisl viverra sit congue.
									</p>
								</div>
								<div className={scss.top_right}>
									<Image src={newsThree} alt="news-1" />
								</div>
							</div>
							<div className={scss.bottom}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
