import store from '../store';
import { addToList, updateList, deleteList } from '../actions';

it('should add song to store', () => {	
	store.dispatch(
		addToList(3, 'mr.tester', 'everything has passed', 'hymn')
	);
	expect(
		store.getState().byHash[3]
	).toBeTruthy();	
})

it('should edit song', () => {
	store.dispatch(
		updateList(0, 'mr.tester', 'dry well', 'pop')
	);
	expect(
		store.getState().byHash[0].content.artist
	).toBe('mr.tester');
});

it('should delete song', () => {
	store.dispatch(
		deleteList(2)
	)
	expect(
		store.getState().byHash[2]
	).toBeUndefined();
});