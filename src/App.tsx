import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header/Header2';
import HeaderTop from './components/Header/HeaderTop';
import SignUp from './pages/SignUp';
import ImageBottom from './components/Bottom/ImageBottom';
import Subscribe from './components/Footer/Subscribe';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<>
			{
				loading ?
					<Loader />
					:
					<>
						<HeaderTop />
						<Header2 />
						<Banner pageName={'Sign up'} singleName={'sign up'} />
						<SignUp />
						<ImageBottom />
						<Subscribe />
						<Footer />
					</>
			}
		</>
	);
}

export default App;
