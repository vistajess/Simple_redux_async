import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

import Root from './components/Root';

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('mount')
);