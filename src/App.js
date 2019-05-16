import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Vision from './components/Vision';
import About from './components/About';
import FeatureProject from './components/FeatureProject';
import Publication from './components/Publication';
import Support from './components/Support';

import Footer from './components/Footer';
import Carousel from './components/Carousel';
import News from './components/News';
import Cards from './components/Cards';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navigation />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/" component={Vision} exact />
					<Route path="/" component={About} exact />
					<Route path="/" component={FeatureProject} exact />
					<Route path="/" component={Publication} exact />
					<Route path="/" component={Support} exact />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
