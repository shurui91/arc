import React, { Component } from 'react';
import './Bibletext.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Bibletext extends Component {
	render() {
		return (
			<div>
				<div className="bibletext">
					<h1>EVENTS</h1>
					<Link to="/bibletext">
						<Button type="button" className="float-right">
							Read
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Bibletext;
