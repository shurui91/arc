import React, { Component } from 'react';
import './Home.css';

import Carousel from './Carousel';
import Vision from './Vision';
import Footer from './Footer';
import News from './News';
import Cards from './Cards';

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<Vision />
				<Cards />
				<News />
				<Footer />
			</div>
		);
	}
}

export default Home;
