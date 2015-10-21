import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

export default function configureStore() {
	const store = compose(
		applyMiddleware(
			require('redux-thunk'),
			require('redux-logger')()
		)
	)(createStore)(reducers);

	return store;
}