import type { FC } from 'react';
import { News } from './sections/News';
import { Contact } from './sections/Contact';

export const MainPage: FC = () => {
	return (
		<>
			{/* <News /> */}
			<News />
			<Contact />
		</>
	);
};
