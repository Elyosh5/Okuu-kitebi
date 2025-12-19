'use client';
import type { FC } from 'react';
import scss from './News.module.scss';

export const News: FC = () => {
	return (
		<section className={scss.News}>
			<div className="container">
				<div className={scss.content}>News</div>
			</div>
		</section>
	);
};
