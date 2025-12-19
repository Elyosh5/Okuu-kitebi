'use client';
import style from './Header.module.scss';
import SearchIcon from '@/assets/header/SearchIcon.png';
import Eye from '@/assets/header/Eyes.png';
import { Dropdown, Space, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const aboutItems = [
	{ key: '1', label: <a href="#">О нас</a> },
	{ key: '2', label: <a href="#">История создания и развития</a> },
	{ key: '3', label: <a href="#">Галерея</a> },
	{ key: '4', label: <a href="#">Миссия и ценности</a> },
	{ key: '5', label: <a href="#">Команда</a> },
	{ key: '6', label: <a href="#">Партнеры и сотрудничество</a> }
];

const catalogItems = [
	{ key: '1', label: <a href="#">Направления</a> },
	{ key: '2', label: <a href="#">Предметы</a> }
];

const newsItems = [
	{ key: '1', label: <a href="#">Новости</a> },
	{ key: '2', label: <a href="#">Публикации</a> }
];

const statsItems = [
	{ key: '1', label: <a href="#">Список библиотек по КР по областям</a> },
	{ key: '2', label: <a href="#">Коды школ</a> },
	{
		key: '3',
		label: <a href="#">Интерактивная карта школьных библиотек Кыргызстана</a>
	}
];

const languagesItems = [
	{ key: '1', label: <a href="#">Кыргызский (KG)</a> },
	{ key: '2', label: <a href="#">Русский (RU)</a> }
];

const mobileItems = [
	{
		key: 'about',
		label: 'О нас',
		children: aboutItems
	},
	{
		key: 'catalog',
		label: 'Каталог учебников',
		children: catalogItems
	},
	{
		key: 'news',
		label: 'Новости и публикации',
		children: newsItems
	},
	{
		key: 'stats',
		label: 'Статистика',
		children: statsItems
	},
	{
		key: 'lang',
		label: 'Язык',
		children: languagesItems
	}
];

const { Link } = Typography;

export const Header = () => {
	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.content}>
					<div className={style.logo}>
						<a href="#">
							<Image
								src={logo}
								alt="Vite logo"
								style={{ height: '56px', width: '90px' }}
							/>
						</a>
					</div>

					<nav className={style.navlinks}>
						<Dropdown menu={{ items: aboutItems }} trigger={['click']}>
							<Link href="#">
								<Space>О нас</Space>
							</Link>
						</Dropdown>

						<Dropdown menu={{ items: catalogItems }} trigger={['click']}>
							<Link href="#">
								<Space>Документация</Space>
							</Link>
						</Dropdown>

						<Dropdown menu={{ items: newsItems }} trigger={['click']}>
							<Link href="#">
								<Space>FQA</Space>
							</Link>
						</Dropdown>

						<Link href="#">НПА</Link>

						<Typography.Link href="#">Проекты</Typography.Link>

						<Dropdown menu={{ items: statsItems }} trigger={['click']}>
							<Link href="#">
								<Space>Новости</Space>
							</Link>
						</Dropdown>

						<Dropdown menu={{ items: statsItems }} trigger={['click']}>
							<Link href="#">
								<Space>Библиотека</Space>
							</Link>
						</Dropdown>

						<Link href="#">Карта</Link>
					</nav>

					<div style={{ display: 'flex', gap: '10px' }}>
						<div className={style.languageItem}>
							<button className={style.button}>Eng</button>
							<button className={style.button}>Кырг</button>
							<button className={style.button}>Рус</button>
						</div>

						<div style={{ display: 'flex', gap: '10px' }}>
							<button className={style.button}>
								<Image src={Eye} alt="Search" />
							</button>
							<button className={style.button}>
								<Image src={SearchIcon} alt="Search" />
							</button>
						</div>
					</div>

					<div className={style.burgerMenu}>
						<Dropdown menu={{ items: mobileItems }} trigger={['click']}>
							<Link>
								<MenuOutlined style={{ fontSize: '24px', color: '#fff' }} />
							</Link>
						</Dropdown>
					</div>
				</div>
			</div>
		</header>
	);
};
