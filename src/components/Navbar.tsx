import '../styles/Navbar.scss';
import { api } from '../services/api';
import { useGlobalContext } from '../context/StateContext';

const Navbar = () => {
	const { state, dispatch } = useGlobalContext();

	const signOut = () => {
		api.post('/signout').then(() => dispatch({ type: 'SET_AUTH', payload: false }));
	};

	console.log(state.isAuthenticated);

	return (
		<nav>
			<ul>
				<li>Home</li>
				<li>Add a blog</li>
			</ul>

			<div className='btnContainer'>
				<a href='http://localhost:8000/google'>
					<button>Log in with Google</button>
				</a>
				{state.isAuthenticated && <button onClick={signOut}>signOut</button>}
			</div>
		</nav>
	);
};

export default Navbar;
