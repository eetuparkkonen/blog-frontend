import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './context/StateContext';
import { WithAxios } from './services/api';

ReactDOM.render(
	<React.StrictMode>
		<GlobalContextProvider>
			<WithAxios>
				<App />
			</WithAxios>
		</GlobalContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
