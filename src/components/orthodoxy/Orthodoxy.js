import React, { Component } from 'react';
import './Orthodoxy.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Orthodoxy extends Component {
	render() {
		return (
			<div>
				<div className="orthodoxy">
					<h1>EVENTS</h1>
					<Link to="/orthodoxy">
						<Button type="button" className="float-right">
							Read
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Orthodoxy;
