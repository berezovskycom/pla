import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToList } from '../actions';
import store from '../store';

import { YOU_TUBE_LINK, SOUND_CLOUD_LINK } from '../constants';
import { v4 } from 'uuid';

import PlaylistHeader from '../components/PlaylistHeader';
import Title from '../components/Title';
import AddSong from './AddSong';
import Song from './Song';

import { 
	ResponsiveContainer,
	Medium3,
	Medium2,
	Medium1 
} from '../components/view/Layout';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addNewSong: false
		}
		this.splitAndJoin = this.splitAndJoin.bind(this);
		this.fetchInfo = this.fetchInfo.bind(this);
	}

	splitAndJoin(str, sign) {
	  return str.split(' ').join(sign);
	}

	fetchInfo(artist, sign = '+', song) {
	  const fetchedInfo = this.splitAndJoin(artist, sign) + 
	  sign + this.splitAndJoin(song, sign);
	  return fetchedInfo.toLowerCase();
	}

	render() {
		return (
			<div className="container container-fluid">
				<Title/>
				<div>
					<PlaylistHeader/>
						{this.props.data.byId.map((item) => {	
							const {artist, song, genre} = this.props.data.byHash[item].content;
							return <Song
								key={item}
								index={item}
								artist={artist}
								song={song}
								genre={genre}
								videoLink={YOU_TUBE_LINK + this.fetchInfo(artist, '+', song)}
								musicLink={SOUND_CLOUD_LINK + this.fetchInfo(artist, '%20', song)}
							/>
						})}
				</div>
				<AddSong/>
			</div>		
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state
	}
}

Playlist.propTypes = {
	data: PropTypes.object,
}

export default connect(mapStateToProps)(Playlist);