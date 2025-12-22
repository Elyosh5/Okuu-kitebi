import type { FC } from 'react';
import { Hero } from './sections/hero/Hero';
import { News } from './sections/news/News';
import { Books } from './sections/books/Books';
import { Rooms } from './sections/rooms/Rooms';
import { Faq } from './sections/faq/Faq';
import { Contact } from './sections/contact/Contact';

export const HomePage: FC = () => {
	return (
		<>
			<Hero />
			<News />
			<Books />
			<Rooms />
			<Faq />
			<Contact />
		</>
	);
};
