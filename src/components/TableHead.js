import React from 'react';
import {
	Medium1,
	Medium2, 
	Medium3, 
	ResponsiveContainer
} from './view/Layout';

const TableHead = () => (
	<ResponsiveContainer header="true">
		<Medium3>Artist</Medium3>
		<Medium3>Song</Medium3>
		<Medium2>Genre</Medium2>
		<Medium1>Clip</Medium1>
		<Medium1>Song</Medium1>
		<Medium1></Medium1>
		<Medium1></Medium1>
	</ResponsiveContainer>	
)

export default TableHead;