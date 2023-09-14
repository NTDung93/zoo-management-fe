import AnimalDetailSection from '../components/AnimalDetail/AnimalDetailSection';
import OtherAnimalsSection from '../components/AnimalDetail/OtherAnimalsSection';
import ClientSectionSlider from '../components/Animals/ClientSectionSlider';
import Banner from '../components/Banner/Banner';

const AnimalDetail = () => {
	return (
		<>
			<Banner pageName={'Animal detail'} singleName={'Animal detail'} />
			<AnimalDetailSection />
			<OtherAnimalsSection />
			<ClientSectionSlider />
		</>
	);
};

export default AnimalDetail;
