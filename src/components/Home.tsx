import { useEffect, useState } from 'react';
import { api } from '../services/api';
import '../styles/Home.scss';
import Logo from '../blog.jpg';

interface BlogI {
	name: string;
	email: string;
	text: string;
	_id?: string;
}

const Home = () => {
	const [getblogs, setGetBlogs] = useState<BlogI[]>([]);

	useEffect(() => {
		api
			.get('/posts')
			.then((resp) => setGetBlogs(resp.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div className='homeContainer'>
				<h1>
					The best blogs you <br /> will find on <br /> the internet
				</h1>
				<img src={Logo} alt='Styled blog' />
			</div>
			<div className='blogContainer'>
				{getblogs.map((blog: BlogI) => {
					return (
						<div className='single-blog' key={blog._id}>
							<h1>name: {blog.name}</h1>
							<p>text: {blog.text}</p>
							<p>email: {blog.email}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Home;
