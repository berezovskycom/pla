import React from 'react';

import {
	Medium1,
	Medium2, 
	Medium3, 
	StrongTextTitle,
	ResponsiveContainer,
} from './view/Layout';

const PlaylistHeader = () => (
	<ResponsiveContainer header="true">
		<Medium3>
			<StrongTextTitle>Artist</StrongTextTitle>
		</Medium3>
		<Medium2>
			<StrongTextTitle>Title</StrongTextTitle>
		</Medium2>
		<Medium2>
			<StrongTextTitle>Genre</StrongTextTitle>
		</Medium2>
		<Medium1>
			<StrongTextTitle>Video</StrongTextTitle>
		</Medium1>
		<Medium1>
			<StrongTextTitle>Music</StrongTextTitle>
		</Medium1>
		<Medium1></Medium1>
		<Medium2></Medium2>
	</ResponsiveContainer>	
)

export default PlaylistHeader;