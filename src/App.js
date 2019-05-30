import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

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
						<img
							alt=""
							src={require('./arcLogo.jpg')}
							height="80"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
					<Nav>
						{/* "NavLink" here since "active" class styling is needed */}
						<Nav.Link as={NavLink} to="/" exact style={{ fontSize: 21 }}>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/publication" style={{ fontSize: 21 }}>
							Publication
						</Nav.Link>
						<Nav.Link as={NavLink} to="/project" style={{ fontSize: 21 }}>
							Events
						</Nav.Link>
						<Nav.Link as={NavLink} to="/support" style={{ fontSize: 21 }}>
							Support
						</Nav.Link>
						<Nav.Link as={NavLink} to="/aboutus" style={{ fontSize: 21 }}>
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
		</Router >
	);
}

export default App;
