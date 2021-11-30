import '../styles/Navbar.scss';
import { api } from '../services/api';
import { useGlobalContext } from '../context/StateContext';
import { Link } from 'react-router-dom';

const Navbar = ({ user }: any) => {
	const { state, dispatch } = useGlobalContext();

	const signOut = () => {
		api.post('/signout').then(() => dispatch({ type: 'SET_AUTH', payload: false }));
	};

	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/add-blog'>Add a blog</Link>
				</li>
			</ul>

			<div className='btnContainer'>
				{!state.isAuthenticated ? (
					<a href='http://localhost:8000/google'>
						<button>Log in with Google</button>
					</a>
				) : (
					<button>Hello {user.username}!</button>
				)}

				{state.isAuthenticated && <button onClick={signOut}>Sign Out</button>}
			</div>
		</nav>
	);
};

export default Navbar;
