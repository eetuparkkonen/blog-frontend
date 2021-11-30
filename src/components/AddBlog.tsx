import { useState } from 'react';
import '../styles/AddBlog.scss';

const AddBlog = (props: any) => {
	const [text, setText] = useState<string>('');

	const handleSumbit = (e: any) => {
		e.preventDefault();
		props.postBlogPost({ name: props.user.username, email: props.user.email, text: text });

		setText('');
	};

	return (
		<div className='input-field'>
			<h1>Write your own blog post!</h1>
			<textarea rows={6} cols={100} placeholder='Blog text...' onChange={(e) => setText(e.target.value)} value={text} />
			<button onClick={handleSumbit} className='button-53'>
				Submit
			</button>
		</div>
	);
};

export default AddBlog;
