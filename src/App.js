import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Navigation />
			<div id="content" />
			<Footer />
		</div>
	);
}

export default App;
