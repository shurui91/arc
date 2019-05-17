import React, { Component } from 'react';
import './Publication.css';
import { Button } from 'react-bootstrap';

class Publication extends Component {
	render() {
		return (
			<div className="publication">
				<h1>CHRISTIANITY IN CHINA</h1>
				<img className="imageIntro" src={require('../brothers_2.png')} alt="" />
				<Button className="float-right" variant="primary">
					Read
				</Button>
			</div>
		);
	}
}

export default Publication;
