'use client';
import React, { useEffect, useState } from 'react';
import scss from './Projects.module.scss';
import Image, { StaticImageData } from 'next/image';
import image from '@/assets/projects/office.jpg';
import ornament from '@/assets/ornament.png';

interface ProjectsItemProps {
	img: StaticImageData;
	title: string;
	p: string;
}

export const Projects = () => {
	const [data, setData] = useState<ProjectsItemProps[]>([]);
	const projectsData: ProjectsItemProps[] = [
		{
			img: image,
			title: 'Открытие корейского центра',
			p: ' Основная цель деятельности Центра — популяризация культуры, искусства, традиций, истории Кореи, содействие в изучении корейского языка, предоставлении доступа к различным информационным ресурсам о Корее для всех заинтересованных читателей в Кыргызстане.'
		},
		{
			img: image,
			title: 'Project Title 2',
			p: 'Description for project 2.'
		}
	];

	useEffect(() => {
		setData(projectsData);
	}, []);
	const ProjectsItem = ({ img, title, p }: ProjectsItemProps) => {
		return (
			<div className={scss.ProjectsItem}>
				<Image
					src={img.src}
					width={img.width}
					height={img.height}
					alt={title}
				/>
				<div className={scss.text}>
					<h3>{title}</h3>
					<p>{p}</p>
				</div>
			</div>
		);
	};

	return (
		<div className={scss.Projects}>
			<div className="container">
				<div className={scss.content}>
					<Image
						className={scss.ornament}
						src={ornament}
						width={1075}
						height={1075}
						alt="Ornament"
					/>
					<h1>Проекты</h1>
					<div className={scss.items}>
						{data.map((item, index) => (
							<ProjectsItem
								key={index}
								img={item.img}
								title={item.title}
								p={item.p}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
