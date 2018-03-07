import { createStore } from 'redux';
import reducer from '../reducers';
import { loadState } from '../utils/localStorage'

const persistedState = loadState();

const store = createStore(reducer, persistedState);

export default store;