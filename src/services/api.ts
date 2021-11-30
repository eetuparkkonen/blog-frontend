import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true,
});

api.defaults.withCredentials = true;

export const interceptors: any = {
	setupInterceptors: (dispatch: any) => {
		api.interceptors.response.use(
			(response) => {
				return response;
			},
			(error) => {
				if (error.response.status === 401) {
					dispatch({ type: 'SET_AUTH', payload: false });
				}

				return Promise.reject(error);
			}
		);
	},
};
