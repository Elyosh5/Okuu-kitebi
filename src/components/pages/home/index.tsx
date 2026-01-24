import type { FC } from 'react';
import { Hero } from './sections/hero/Hero';
import { News } from './sections/news/News';
import { Books } from './sections/books/Books';
import { Rooms } from './sections/rooms/Rooms';
import { Faq } from './sections/faq/Faq';
import { Contact } from './sections/contact/Contact';
import { About_us } from './sections/about-us/About_us';

export const HomePage: FC = () => {
	return (
		<>
			<Hero />
			<News />
			<About_us />
			<Books />
			<Rooms />
			<Faq />
			<Contact />
		</>
	);
};
