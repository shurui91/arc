import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

// import Navigation from './components/Navigation';
import Home from './components/Home';
import Vision from './components/Vision';
import About from './components/About';
import FeatureProject from './components/FeatureProject';
import Publication from './components/Publication';
import Books from './components/Books';
import Support from './components/Support';
import Error from './components/Error';

function App() {
	return (
		<Router>
			<div>
				<Navbar>
					<Navbar.Brand as={NavLink} to="/">
						ARC
					</Navbar.Brand>
					<Nav>
						{/* "NavLink" here since "active" class styling is needed */}
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/publication">
							Publication
						</Nav.Link>
						<Nav.Link as={NavLink} to="/project">
							Events
						</Nav.Link>
						<Nav.Link as={NavLink} to="/support">
							Support
						</Nav.Link>
						<Nav.Link as={NavLink} to="/aboutus">
							About
						</Nav.Link>
					</Nav>
				</Navbar>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/vision" exact component={Vision} />
					<Route path="/aboutus" exact component={About} />
					<Route path="/project" exact component={FeatureProject} />
					<Route path="/publication" exact component={Publication} />
					<Route path="/books" exact component={Books} />
					<Route path="/support" exact component={Support} />
					<Route component={Error} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
