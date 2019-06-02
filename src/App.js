import React from "react";
import "./App.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Home from "./components/Home";
import Vision from "./components/Vision";
import About from "./components/About";
import Events from "./components/Events";
import Publication from "./components/Publication";
import Books from "./components/Books";
import Support from "./components/Support";
import Contactus from "./components/Contactus";
import News from "./components/News";
import Error from "./components/Error";

function App() {
	return (
		<Router>
			<div>
				<Navbar>
					<Navbar.Brand as={NavLink} to="/">
						<img alt="" src={require("./arcLogo.jpg")} height="80" className="d-inline-block align-top" />
					</Navbar.Brand>
					<Nav style={{ fontSize: 21 }}>
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
							About
						</Nav.Link>
					</Nav>
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
					<Route component={Error} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
