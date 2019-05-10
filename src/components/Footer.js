import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = { year: new Date().getFullYear() };
	}

	render() {
		return (
			<footer className="footer">
				<p>&copy; {this.state.year} ARC. All Rights Reserved</p>
			</footer>
		);
	}
}

export default Footer;
