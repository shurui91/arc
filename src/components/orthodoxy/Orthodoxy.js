<<<<<<< HEAD
import React, { Component } from 'react';
import './Kissinger.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Kissinger extends Component {
	render() {
		return (
			<div>
				<div className="kissinger">
					<h1>EVENTS</h1>
					<Link to="/books">
						<Button type="button" className="float-right">
							Read
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Kissinger;
=======
import React, { Component } from 'react';
import './Kissinger.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Kissinger extends Component {
	render() {
		return (
			<div>
				<div className="kissinger">
					<h1>EVENTS</h1>
					<Link to="/books">
						<Button type="button" className="float-right">
							Read
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Kissinger;
>>>>>>> 430ca1fdfc540c7fdcfd27762fa066f8d8180230
