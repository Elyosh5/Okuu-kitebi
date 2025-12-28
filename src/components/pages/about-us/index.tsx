import { Contact } from '../home/sections/contact/Contact';
import { Achievement } from '@/components/pages/about-us/sections/achieve/Achievement';
import { Staff } from './sections/staff/Staff';


export const AboutUsPage = () => {
	return (
		<>
			<Achievement />
			<Staff />
			<Contact />
		</>
	);
};
