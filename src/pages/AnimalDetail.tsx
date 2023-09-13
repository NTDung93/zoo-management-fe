import AnimalDetailSection from '../components/AnimalDetail/AnimalDetailSection';
import OtherAnimalsSection from '../components/AnimalDetail/OtherAnimalsSection';
import ClientSectionSlider from '../components/Animals/ClientSectionSlider';
import SubscribeSection from '../components/Animals/SubscribeSection';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Header2 from '../components/Header/Header2';

const AnimalDetail = () => {
	return (
		<>
			<Header2 />
			<Banner pageName='Animal Detail' singleName='Animal Detail' />
			<AnimalDetailSection />
			<OtherAnimalsSection />
			<ClientSectionSlider />
			<SubscribeSection />
			<Footer />
		</>
	);
};

export default AnimalDetail;
