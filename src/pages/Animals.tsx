import { FC } from 'react';
import AnimalGallery from '../components/Animals/AnimalGallery';
import ClientSectionSlider from '../components/Animals/ClientSectionSlider';
import EventSection from '../components/Animals/EventSection';
import MembershipSection from '../components/Animals/MembershipSection';
import FactSection from '../components/Home/FactSection';
import FAQSection from '../components/Home/FaqSection';
import Banner from '../components/Banner/Banner';

const Animals: FC = () => {
	return (
		<>
			<Banner pageName={'Animals'} singleName={'Animals'} />
			<AnimalGallery />
			<EventSection />
			<FAQSection />
			<FactSection />
			<MembershipSection />
			<ClientSectionSlider />
		</>
	);
};

export default Animals;
