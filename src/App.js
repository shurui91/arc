import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
// import Map from './components/Map';
import News from './components/News';
import Cards from './components/Cards';

function App() {
	return (
		<div>
			<Navigation />
			<Carousel />
			<Cards />
			<News />
			<Footer />
		</div>
	);
}

export default App;
