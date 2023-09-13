import SubscribeSection from '../components/Animals/SubscribeSection';
import BackToTop from '../components/BackToTop/BackToTop';
import Banner from '../components/Banner/Banner';
import ErrorSection from '../components/Error/ErrorSection';
import Footer from '../components/Footer/Footer';
import Header2 from '../components/Header/Header2';

const Page404 = () => {
	return (
		<>
			<BackToTop />
			<Header2 />
			<Banner pageName='Page Not Found' singleName='404' />
			<ErrorSection />
			<SubscribeSection />
			<Footer />
		</>
	);
};

export default Page404;
