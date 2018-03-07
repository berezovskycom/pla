import { splitAndJoin, fetchInfo } from '../utils/getLinks';

it('should validate a link', () => {
	const artist = 'mr.test';
	const song = 'test me hard';
	expect(fetchInfo(artist, '+', song)).toBe('mr.test+test+me+hard');
});