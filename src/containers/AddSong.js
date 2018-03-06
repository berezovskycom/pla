import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions';
import store from '../store';
import { v4 } from 'uuid';

import { 
	ResponsiveContainer,
	Medium3,
	Medium2,
	Medium1 
} from '../components/view/Layout';

class AddSong extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addNewSong: false
		}		
		this.toggleAddSong = this.toggleAddSong.bind(this);
		this.addSong = this.addSong.bind(this);
		this.emptyInput = this.emptyInput.bind(this);
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
		this.emptyInput()
	}

	emptyInput() {
		this.newArtist.value = ''
		this.newSong.value = ''
		this.newGenre.value = ''	
	}

	render() {
		return (
			<ResponsiveContainer>
				{
					this.state.addNewSong ? 
					<div>
						<Medium2>
							<input 
								type="text" 
								placeholder="Artist"
								className="input-margin"
								ref={(input) => {this.newArtist = input}}
							/>
						</Medium2>
						<Medium2>	
							<input 
								type="text"
								placeholder="Song title" 
								className="input-margin"
								ref={(input) => {this.newSong = input}}
							/>
						</Medium2>	
						<Medium2>
							<input 
								type="text" 
								placeholder="Genre"
								className="input-margin"
								ref={(input) => {this.newGenre = input}}
							/>
						</Medium2>
						<Medium1>
							<button onClick={this.addSong}>
								Add
							</button>
						</Medium1>
					</div> : ''
				}
				<ResponsiveContainer className="center-block">
					<button 
						onClick={this.toggleAddSong}
						className="btn btn-primary center-block">
						{this.state.addNewSong ? 'Cancel' : 'Add song'}
					</button>
				</ResponsiveContainer>
			</ResponsiveContainer>	
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state
	}
}


export default connect(mapStateToProps)(AddSong);