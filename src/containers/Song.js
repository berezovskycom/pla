import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { updateList, deleteList } from '../actions';
import {
	Medium1,
	Medium2, 
	Medium3, 
	ResponsiveContainer,
	StrongText
} from '../components/view/Layout';

class Song extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
		}
		this.showForms = this.showForms.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.deleteSong = this.deleteSong.bind(this);
	}

	showForms() {
		this.setState(prevState => ({
		  edit: !prevState.edit
		}));
	}

	handleUpdate() {
		this.showForms();
		console.log(store.getState());
		if (this.artist.value && this.song.value !== '' || undefined) {
			store.dispatch(updateList(
				this.props.index, 
				this.artist.value, 
				this.song.value, 
				this.genre.value
			));
		}
		console.log(store.getState());
	}

	deleteSong() {
		store.dispatch(deleteList(this.props.index));
		console.log(store.getState());
	}

	render() {
		const editIsNotClicked = !this.state.edit
		return (
			<ResponsiveContainer>
				<Medium3>{editIsNotClicked ? 
					<StrongText>{this.props.artist}</StrongText> : 
					<input 
						type="text"
						placeholder="Artist" 
						ref={(input) => {this.artist = input}}
					/>}
				</Medium3>

				<Medium2>{editIsNotClicked ? 
					this.props.song : 
					<input 
						type="text" 
						placeholder="Song title"
						ref={(input) => {this.song = input}}
					/>}
				</Medium2>

				<Medium2>{editIsNotClicked ? 
					this.props.genre : 
					<input 
						type="text" 
						placeholder="Genre"
						ref={(input) => {this.genre = input}}
					/>}
				</Medium2>

				<Medium1>
					<a href={this.props.videoLink} target="_blank">Youtube</a>
				</Medium1>

				<Medium1>
					<a href={this.props.musicLink} target="_blank">SoundCloud</a>
				</Medium1>

				{this.state.edit ? 
					<Medium1>
					 <button onClick={this.showForms}>Cancel</button>
					</Medium1> : undefined
				}	

				<Medium1>	
					<button onClick={this.handleUpdate}>
						{!this.state.edit ? 'Edit' : 'Save'}
					</button>
				</Medium1>

				<Medium1>
					<button 
						className="btn btn-xs btn-danger"
						onClick={this.deleteSong}
					>Delete</button>
				</Medium1>	
			</ResponsiveContainer>
		)
	}
}

Song.propTypes = {
	artist: PropTypes.string,
	song: PropTypes.string,
	genre: PropTypes.string,
	musicLink: PropTypes.string,
	videoLink: PropTypes.string
}

export default Song;