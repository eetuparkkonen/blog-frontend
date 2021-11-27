import { useEffect } from 'react';
import { api } from './services/api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/Styles.scss';
import { useGlobalContext } from './context/StateContext';

function App() {
	const { dispatch } = useGlobalContext();
	useEffect(() => {
		api.get('/isAuthenticated').then(() => {
			dispatch({ type: 'SET_AUTH', payload: true });
		});
	}, [dispatch]);

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='Content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
