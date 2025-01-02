import React, { Component } from 'react';
import './Home.css';
import soundfile from '../assets/Sign of the Times.mp3';
// import Sound from 'react-sound';
import Carousel from './Carousel';
import Vision from './Vision';
import UpdateList from './UpdateList';
import PartnerImages from './PartnerImages';
import Copyright from './Copyright';
import Footer from './Footer';

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<UpdateList />
				<Vision />
				<PartnerImages />
				<Footer />
				<Copyright />
				{/* <Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/> */}
			</div>
		);
	}
}

export default Home;
