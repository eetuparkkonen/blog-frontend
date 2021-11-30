import { useParams } from 'react-router';
import { ParamTypes } from '../types';

const SingleBlog = ({ fetchedBlogs }: any) => {
	const { id } = useParams<ParamTypes>();

	const getBlogById = fetchedBlogs.filter((blog: any) => {
		return blog._id === id;
	});

	console.log(getBlogById);

	return (
		<div>
			<h1>Author: {getBlogById[0].name}</h1>
			<h2>Email: {getBlogById[0].email}</h2>
			<p>Text: {getBlogById[0].text}</p>
		</div>
	);
};

export default SingleBlog;
