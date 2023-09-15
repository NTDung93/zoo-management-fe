import Footer from './components/Footer/Footer';
import Header2 from './components/Header/Header2';
import HeaderTop from './components/Header/HeaderTop';
import Subscribe from './components/Footer/Subscribe';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<HeaderTop />
			<Header2 />
			<Outlet />
			<Subscribe />
			<Footer />
		</>
	);
}

export default App;
