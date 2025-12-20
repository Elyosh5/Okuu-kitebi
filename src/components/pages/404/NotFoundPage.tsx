import Image from 'next/image';
import scss from './NotFoundPage.module.scss';
import img from '@/assets/404/404.png';
import Link from 'next/link';

export const NotFoundPage = () => {
	return (
		<div className={scss.NotFound}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.text}>
						<p>Страница не найдена</p>
						<h1>
							Когда-то здесь была страница, но её не успели архивировать :(
						</h1>
						<span>404</span>
						<Link href="/">На главную</Link>
					</div>
					<Image src={img} alt="not found" />
				</div>
			</div>
		</div>
	);
};
