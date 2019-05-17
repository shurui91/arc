import React, { Component } from 'react';
import './Publication.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Publication extends Component {
	render() {
		return (
			<div className="publication">
				<h1>CHRISTIANITY IN CHINA</h1>
				<img className="imageIntro" src={require('../brothers_2.png')} alt="" />
				<Link to="/books">
					<Button type="button" className="float-right">
						Read
					</Button>
				</Link>
			</div>
		);
	}
}

export default Publication;
