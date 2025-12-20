import type { FC } from 'react';
import { Hero } from './sections/Hero';
import { News } from './sections/News';
import { BooksSection } from './sections/BooksSection';
import { RoomsSection } from './sections/RoomsSection';
import { Faq } from './sections/Faq';
import { Contact } from './sections/Contact';

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
