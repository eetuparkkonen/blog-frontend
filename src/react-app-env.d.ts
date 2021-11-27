/// <reference types="react-scripts" />

interface State {
	isAuthenticated: boolean;
}

type ActionTypes = 'SET_AUTH';

interface Action {
	type: ActionTypes;
	payload?: any;
}

type ReducerType = (state: State, action: Action) => State;

type ContextHook = () => {
	state: State;
	dispatch: (action: Action) => void;
};
