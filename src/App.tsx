import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
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
