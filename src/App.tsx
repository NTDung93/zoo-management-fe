import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Subscribe from './components/Footer/Subscribe';
import Header2 from './components/Header/Header2';

function App() {
	return (
		<>
			<Header2 />
			<Outlet />
			<Subscribe />
			<Footer />
		</>
	);
}

export default App;
