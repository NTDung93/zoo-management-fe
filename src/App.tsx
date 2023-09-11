import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Animals from './pages/Animals';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return <>{loading ? <Loader /> : <Animals />}</>;
}

export default App;
