import React, { Component } from 'react';
import './Copyright.css';

class Copyright extends Component {
	constructor(props) {
		super(props);
		this.state = { year: new Date().getFullYear() };
	}

	render() {
		return (
			<div className='copyright'>
				<p>&copy; {this.state.year} ARC. All Rights Reserved</p>
			</div>
		);
	}
}

export default Copyright;
