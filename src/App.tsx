import { useEffect, useState } from 'react';
import { api } from './services/api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './styles/Styles.scss';
import { useGlobalContext } from './context/StateContext';
import { interceptors } from './services/api';
import AddBlog from './components/AddBlog';
import { getBlogs } from './services/blog';
import { getUser } from './services/user';
import AddBlogNotSigned from './components/AddBlogNotSigned';
import SingleBlog from './components/SingleBlog';
function App() {
	const { dispatch, state } = useGlobalContext();
	const [fetchedBlogs, setFetchedBlogs] = useState<{}[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState();

	useEffect(() => {
		interceptors.setupInterceptors(dispatch);
		api.get('/isAuthenticated').then(() => {
			dispatch({ type: 'SET_AUTH', payload: true });
		});
		getUser().then((res) => setUser(res));
		getBlogs().then((res) => {
			setFetchedBlogs(res);
			setIsLoading(false);
		});
	}, [dispatch]);

	const postBlogPost = async (post: { name: string; email: string; text: string }) => {
		const response = await api.post('/new-blog', post);
		setFetchedBlogs([...fetchedBlogs, response.data]);
	};

	return (
		<Router>
			<div className='App'>
				{!isLoading && <Navbar user={user} />}
				<div className='Content'>
					<Switch>
						<Route exact path='/'>
							{!isLoading && <Home fetchedBlogs={fetchedBlogs} />}
						</Route>
						<Route exact path='/blog/:id'>
							{!isLoading && <SingleBlog fetchedBlogs={fetchedBlogs} />}
						</Route>
						<Route exact path='/add-blog'>
							{state.isAuthenticated && !isLoading ? <AddBlog user={user} postBlogPost={postBlogPost} /> : <AddBlogNotSigned />}
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
