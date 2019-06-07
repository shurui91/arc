import React, { Component } from 'react';
import './Stockholm.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Stockholm extends Component {
	render() {
		return (
			<div>
				<div className="stockholm">
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

export default Stockholm;
