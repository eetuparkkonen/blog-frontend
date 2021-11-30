import { api } from './api';

export const getBlogs = async () => {
	const { data } = await api.get('/posts');
	return data;
};
