import React, { Component } from 'react';
import './Home.css';

import Carousel from './Carousel';
import Footer from './Footer';
import News from './News';
import Cards from './Cards';

class Home extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<Cards />
				<News />
				<Footer />
			</div>
		);
	}
}

export default Home;
