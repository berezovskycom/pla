import React, { Component } from 'react';
import { connect } from 'react-redux';
import { YOU_TUBE_LINK, SOUND_CLOUD_LINK } from '../constants';
import { addToList } from '../actions';
import store from '../store';
import { v4 } from 'uuid';

import PlaylistHeader from './PlaylistHeader';
import Title from './Title';
import Song from './Song';

import { 
	ResponsiveContainer,
	Medium3,
	Medium2,
	Medium1 
} from './view/Layout';

class Playlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addNewSong: false
		}
		this.splitAndJoin = this.splitAndJoin.bind(this);
		this.fetchInfo = this.fetchInfo.bind(this);
		this.toggleAddSong = this.toggleAddSong.bind(this);
		this.addSong = this.addSong.bind(this);		
	}

	splitAndJoin(str, sign) {
	  return str.split(' ').join(sign);
	}

	fetchInfo(artist, sign = '+', song) {
	  const fetchedInfo = this.splitAndJoin(artist, sign) + 
	  sign + this.splitAndJoin(song, sign);
	  return fetchedInfo.toLowerCase();
	}

	toggleAddSong() {
		this.setState(prevState => ({
			addNewSong: !prevState.addNewSong
		}))
		console.log(this.state.addSong);
	}

	addSong() {
		store.dispatch(addToList(
			v4(), 
			this.newArtist.value, 
			this.newSong.value, 
			this.newGenre.value
		));
	}

	render() {
		return (
			<div className="container container-fluid">
				<Title text="My playlist"/>
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
						{
							this.state.addNewSong ? 
							<ResponsiveContainer>
								<Medium2>
									<input 
										type="text" 
										placeholder="Artist"
										ref={(input) => {this.newArtist = input}}
									/>
								</Medium2>
								<Medium2>	
									<input 
										type="text"
										placeholder="Song title" 
										ref={(input) => {this.newSong = input}}
									/>
								</Medium2>	
								<Medium2>
									<input 
										type="text" 
										placeholder="Genre"
										ref={(input) => {this.newGenre = input}}
									/>
								</Medium2>
								<Medium1>
									<button onClick={this.addSong}>
										Add
									</button>
								</Medium1>
							</ResponsiveContainer> : null
						}
						<ResponsiveContainer className="center-block">
								<button 
									onClick={this.toggleAddSong}
									className="btn btn-primary center-block">
									{this.state.addNewSong ? 'Cancel' : 'Add song'}
								</button>
						</ResponsiveContainer>
				</div>
			</div>		
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state
	}
}


export default connect(mapStateToProps)(Playlist);