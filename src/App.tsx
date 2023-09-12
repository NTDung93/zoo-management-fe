import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header/Header2';
import HeaderTop from './components/Header/HeaderTop';
import Subscribe from './components/Footer/Subscribe';
import MemberShip from './pages/MemberShip';

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
						<Banner pageName={'Event Ticket'} singleName={'Event Ticket'} />
						<MemberShip />
						<Subscribe />
						<Footer />
					</>
			}
		</>
	);
}

export default App;
