import React from 'react';
import '../styles/AddBlog.scss';

const AddBlogNotSigned = () => {
	return (
		<div className='not-auth'>
			<h1>Sorry!</h1>
			<h1>You need to be signed in to write a blog!</h1>
		</div>
	);
};

export default AddBlogNotSigned;
