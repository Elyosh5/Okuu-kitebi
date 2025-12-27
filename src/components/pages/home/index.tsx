import type { FC } from 'react';
import { Hero } from './sections/hero/Hero';
import { News } from './sections/news/News';
import BooksSection from './sections/books/Books';
import RoomsSection from './sections/rooms/Rooms';
import { Faq } from './sections/faq/Faq';
import { Contact } from './sections/contact/Contact';

export const HomePage: FC = () => {
	return (
		<>
			<Hero />
			<News />
			<BooksSection />
			<RoomsSection />
			<Faq />
			<Contact />
		</>
	);
};
