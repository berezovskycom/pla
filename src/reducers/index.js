import redux from 'redux';
import { ADD_TO_LIST, UPDATE_LIST, DELETE_LIST, DELETE_ALL } from '../constants';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
	const { type, id, payload } = action;
	switch(type) {
		case ADD_TO_LIST: {
      return {
        byId: [ ...state.byId, id],
        byHash: {
          ...state.byHash,
          [id]: payload
        }
      }
    }
    case UPDATE_LIST: {
    	state.byHash[id] = {
    		...state.byHash[id],
    		...payload
    	}
    	return {
    		...state
    	}
    }
    case DELETE_LIST: {
    	const prunedIds = state.byId.filter(item => {
    		return item !== id
    	})
    	delete state.byHash[id]

    	return {
    		byId: prunedIds,
    		byHash: state.byHash
    	}
    }
		default:	
			return state
	}
}

export default reducer;