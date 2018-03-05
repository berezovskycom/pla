import React from 'react';
import {
	Medium1,
	Medium2, 
	Medium3, 
	ResponsiveContainer
} from './view/Layout';

const PlaylistHeader = () => (
	<ResponsiveContainer header="true">
		<Medium3>Artist</Medium3>
		<Medium2>Song</Medium2>
		<Medium2>Genre</Medium2>
		<Medium1>Clip</Medium1>
		<Medium1>Song</Medium1>
		<Medium1></Medium1>
		<Medium2></Medium2>
	</ResponsiveContainer>	
)

export default PlaylistHeader;