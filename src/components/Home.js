import React, { Component } from 'react';
import './Home.css';
import soundfile from '../assets/Sign of the Times.mp3';
import Sound from 'react-sound';
import Carousel from './Carousel';
import Vision from './Vision';
import Copyright from './Copyright';
import Cards from './Cards';
import Partners from './Partners';

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<Vision />
				<Cards />
				<Partners />
				<Copyright />
				<Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
			</div>
		);
	}
}

export default Home;
