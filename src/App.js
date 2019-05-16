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
import Error from './components/Error';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navigation />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/vision" component={Vision} />
					<Route path="/about" component={About} />
					<Route path="/project" component={FeatureProject} />
					<Route path="/publication" component={Publication} />
					<Route path="/support" component={Support} />
					<Route component={Error} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
