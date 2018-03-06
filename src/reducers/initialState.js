const initialState = {
	byId: [0,1,2],
	byHash: {
		0: {
			id: 0,
			content: {
				artist: 'Moby',
				song: 'Porcelain',
				genre: 'Ambient',
			}
		},
		1: {
			id: 1,
			content: {
				artist: 'Bee Gees',
				song: 'Stayin\' alive',
				genre: 'Pop',
			}
		},
		2: {
			id: 2,
			content: {
				artist: 'Gotye',
				song: 'Somebody that I used to know (ft. Kimbra)',
				genre: 'Alternative/Indie',			
			}
		}
	}
}

export default initialState;