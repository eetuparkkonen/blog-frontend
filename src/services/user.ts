import { api } from './api';

export const getUser = async () => {
	const { data } = await api.get('/user-details');
	return data;
};
