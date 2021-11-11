import React from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>See the blogs</li>
				<li>Add a blog</li>
			</ul>

			<div className='btnContainer'>
				<button>Log in</button>
				<button>Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
