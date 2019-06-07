import React, { Component } from 'react';
import './Home.css';

import Carousel from './Carousel';
import Vision from './Vision';
import Footer from './Footer';
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
				<Footer />
			</div>
		);
	}
}

export default Home;
