import SubscribeSection from './components/Animals/SubscribeSection';
import BackToTop from './components/BackToTop/BackToTop';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header/Header2';
import AnimalDetail from './pages/AnimalDetail';

function App() {
	return (
		<>
			<BackToTop />
			<Header2 />
			<Banner pageName={'Cart'} singleName={'Cart'} />
			<AnimalDetail />
			<SubscribeSection />
			<Footer />
		</>
	);
}

export default App;
