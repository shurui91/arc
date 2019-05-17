import React, { Component } from 'react';
import './Support.css';
import Footer from './Footer';
import { Jumbotron } from 'react-bootstrap';

class Support extends Component {
	render() {
		return (
			<div>
				<div className="support">
					<Jumbotron>
						<h1>Support ARC</h1>
						<p>
							To support ARC please send your donation via money order or check to:
							<br />
							Asia Research Center 27611 La Paz Road Laguna Niguel, CA 92677
							<br />
							For more information please contact us at 714-726-7088
						</p>
					</Jumbotron>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Support;
