import type { FC } from 'react';
import { Contact } from '../home/sections/contact/Contact';
import { Projects } from './sections/project/Projects';

export const DocumentationPage: FC = () => {
	return (
		<>
			<Projects />
			<Contact />
		</>
	);
};
