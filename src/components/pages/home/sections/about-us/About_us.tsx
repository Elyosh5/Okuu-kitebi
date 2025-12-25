'use client';
import type { FC } from 'react';
import scss from './About_us.module.scss';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import aboutUsImage from '@/assets/about-us/about.png';
import statue from '@/assets/about-us/statue.png';
import round from '@/assets/about-us/round.png';
import star from '@/assets/about-us/star.png';

interface AboutUsProps {
	id: number;
	title: string;
	description: string;
	imageUrl?: StaticImageData;
	imageUrl2?: StaticImageData;
}

const aboutUs: AboutUsProps[] = [
	{
		id: 1,
		title: 'История',
		description:
			'Национальная библиотека Кыргызстана открыла свои двери в начале XX века и с тех пор прошла долгий путь развития. Её первые фонды формировались за счёт редких книг и ценных рукописей, собранных по всему региону. С годами библиотека стала центром науки и культуры, сохранив в своих стенах тысячи изданий, которые сегодня доступны исследователям, студентам и всем любителям знаний. Она продолжает выполнять важную роль хранителя истории и духовного наследия страны, соединяя прошлое с будущим и открывая новые возможности для образования и просвещения'
	},
	{
		id: 2,
		title: 'Фонды и коллекции',
		description:
			'В фондах собраны уникальные книги, рукописи и архивные материалы, которые бережно хранят страницы истории Кыргызстана.',
		imageUrl: statue
	},
	{
		id: 3,
		imageUrl: round,
		imageUrl2: star,
		title: 'Значение и роль',
		description:
			'Библиотека — это не только книги, но и место встреч, выставок и проектов, вдохновляющих новое поколение к знаниям.'
	}
];

export const About_us: FC = () => {
	return (
		<section className={scss.About_us}>
			<div className="container">
				<div className={scss.content}>
					<h1 className={scss.aboutTitle}>О Нас </h1>
					<div className={scss.aboutUs_container}>
						<div className={scss.leftAboutUs}>
							<div className={scss.left_about}>
								<h1 className={scss.subTitle}>{aboutUs[0].title}</h1>
								<p className={scss.description}>{aboutUs[0].description}</p>
							</div>
							<div className={scss.left_about}>
								{aboutUs.slice(1).map((about) => (
									<div key={about.id} className={scss.left_box}>
										{about.id === 2 && about.imageUrl && (
											<>
												<div className={scss.box_left}>
													<h2 className={scss.subTitle}>{about.title}</h2>
													<p className={scss.description}>
														{about.description}
													</p>
												</div>
												<Image
													src={about.imageUrl}
													alt="About Us Image"
													className={scss.aboutUsImage}
												/>
											</>
										)}
									</div>
								))}
							</div>
							<div className={scss.left_about}>
								{aboutUs[2].imageUrl && aboutUs[2].imageUrl2 && (
									<div className={scss.left_box}>
										<div className={scss.left_about_images}>
											<Image
												src={aboutUs[2].imageUrl}
												alt="About Us Image"
												className={scss.aboutUsImage}
											/>
											<Image
												src={aboutUs[2].imageUrl2}
												alt="About Us Image"
												className={scss.aboutUsImage}
											/>
										</div>
										<div className={scss.box_left}>
											<h2 className={scss.subTitle}>{aboutUs[2].title}</h2>
											<p className={scss.description}>
												{aboutUs[2].description}
											</p>
										</div>
									</div>
								)}
							</div>
							<button className={scss.about_button}>Подробнее</button>
						</div>
						<div className={scss.rightAboutUs}>
							<Image
								src={aboutUsImage}
								alt="About Us Image"
								className={scss.aboutUsImage}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
