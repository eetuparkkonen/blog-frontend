import '../styles/Home.scss';
import Logo from '../blog.jpg';
import { Link } from 'react-router-dom';

interface BlogI {
	name: string;
	email: string;
	text: string;
	_id?: string;
}

const Home = ({ fetchedBlogs }: any) => {
	return (
		<>
			<div className='homeContainer'>
				<h1>
					The best blogs you <br /> will find on <br /> the internet
				</h1>
				<img src={Logo} alt='Styled blog' />
			</div>
			<div className='blogContainer'>
				{fetchedBlogs.map((blog: BlogI) => {
					return (
						<div className='single-blog' key={blog._id}>
							<Link to={'/blog/' + blog._id}>See the whole blog post</Link>
							<h1>Author: {blog.name}</h1>
							<p>Text: {blog.text}</p>
							<p>Email: {blog.email}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Home;
