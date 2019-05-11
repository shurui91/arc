import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Map from './components/Map';

function App() {
	return (
		<div>
			<Navigation />
			<Map />
			<Footer />
		</div>
	);
}

export default App;
