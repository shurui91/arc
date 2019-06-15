import React from 'react';
import './App.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Home from './components/Home';
import Vision from './components/Vision';
import About from './components/About';
import Events from './components/Events';
import Publication from './components/Publication';
import Books from './components/Books';
import Support from './components/Support';
import Contactus from './components/Contactus';
import News from './components/News';
import Error from './components/Error';
import Stockholm from './components/stockholm/Stockholm';
import Bibletext from './components/bibletext/Bibletext';
import Kissinger from './components/kissinger/Kissinger';
import Orthodoxy from './components/orthodoxy/Orthodoxy';
import Fudan from './components/fudan/Fudan';
import Deadsea from './components/deadsea/Deadsea';
import Isaiah from './components/isaiah/Isaiah';

function App() {
	return (
		<Router>
			<div>
				<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
					<Navbar.Brand as={NavLink} to="/">
						<img alt="" src={require('./arcLogo.jpg')} height="80" className="d-inline-block align-top" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" id="basic-navbar-nav">
						<Nav className="mr-auto" style={{ fontSize: 21 }}>
							{/* "NavLink" here since "active" class styling is needed */}
							<Nav.Link as={NavLink} to="/" exact>
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to="/publication">
								Publication
							</Nav.Link>
							<Nav.Link as={NavLink} to="/events">
								Events
							</Nav.Link>
							<Nav.Link as={NavLink} to="/support">
								Support
							</Nav.Link>
							<Nav.Link as={NavLink} to="/aboutus">
								About Us
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/vision" exact component={Vision} />
					<Route path="/aboutus" exact component={About} />
					<Route path="/events" exact component={Events} />
					<Route path="/publication" exact component={Publication} />
					<Route path="/books" exact component={Books} />
					<Route path="/support" exact component={Support} />
					<Route path="/contactus" exact component={Contactus} />
					<Route path="/news" exact component={News} />
					<Route path="/stockholm" exact component={Stockholm} />
					<Route path="/bibletext" exact component={Bibletext} />
					<Route path="/kissinger" exact component={Kissinger} />
					<Route path="/orthodoxy" exact component={Orthodoxy} />
					<Route path="/fudan" exact component={Fudan} />
					<Route path="/deadsea" exact component={Deadsea} />
					<Route path="/isaiah" exact component={Isaiah} />
					<Route component={Error} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
