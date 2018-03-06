import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from '../store';
import reducer from '../reducers';
import { createStore } from 'redux';
import App from '../components/App';
import { loadState, saveState } from '../localStorage'

store.subscribe(() => {
	saveState(store.getState());
})

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App}/>
			</Switch>
		</BrowserRouter>
	</Provider>
);

export default Root;
