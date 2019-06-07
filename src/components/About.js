import React, { Component } from 'react';
import './About.css';
import Footer from './Footer';
import { ListGroup } from 'react-bootstrap';

class About extends Component {
	render() {
		return (
			<div>
				<div className="about">
					<h2>The goal of ARC is to provide a platform by setting up an institute to</h2>
					<ListGroup>
						<ListGroup.Item>
							Bridge the gap between the East and West in targeted areas such as culture, language,
							medicine and religion
						</ListGroup.Item>
						<ListGroup.Item>
							Establish an eminent research and education center to train scholars and produce world class
							and impactful research
						</ListGroup.Item>
						<ListGroup.Item>
							Promote an increased awareness and knowledge between the East and West
						</ListGroup.Item>
						<ListGroup.Item>
							Remove/minimize misunderstandings and biases that are currently upheld by the general public
						</ListGroup.Item>
						<ListGroup.Item>
							Propagate/disseminate truths to society in general and scholars in particular
						</ListGroup.Item>
						<ListGroup.Item>
							Teach relevant topics in the Asian context to businessmen and scholars
						</ListGroup.Item>
					</ListGroup>
				</div>
				<Footer />
			</div>
		);
	}
}

export default About;
