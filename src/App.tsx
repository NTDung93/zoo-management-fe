import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header/Header2';
import HeaderTop from './components/Header/HeaderTop';
import Subscribe from './components/Footer/Subscribe';
import MemberShip from './pages/MemberShip';
import Animals from './pages/Animals';
import Event from './pages/Event';
import SignIn from './pages/SignIn';
import EventDetail from './pages/EventDetail';
import Cart from './pages/Cart';
import EventTicket from './pages/EventTicket';
import Gallery from './pages/Gallery';
import Membership from './components/MemberShip/Membership';
import SignUp from './pages/SignUp';
import MemberShipPlan from './components/MemberShip/MemberShipPlan';
import NewDetail from './pages/NewDetails';

function App() {
	return (
		<>
			<HeaderTop />
			<Header2 />
			<Banner pageName={'Sign In'} singleName={'Sign In'} />
			<SignIn />
			<Subscribe />
			<Footer />
		</>
	);
}

export default App;
