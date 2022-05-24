import React, { Component } from 'react';
import './2022NeeExhibitionWord.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Copyright from '../Copyright';

class Bible extends Component {
	render() {
		return (
			<div>
				<div className='bible'>
					<h2>Watchman Nee Exhibition-Museum of the Bible Publications</h2>
					<h2>倪柝聲弟兄殉道五十週年特展文章</h2>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={12}>
								<div style={{ textAlign: 'center' }}>
								<ul>
										<li><a href="https://www.museumofthebible.org/newsroom/museum-of-the-bible-honors-of-watchman-nee">Watchman Nee exhibition - English and Chinese<br />聖經博物館紀念倪柝聲殉道五十周年特展</a></li>
										<li><a href="https://www.museumofthebible.org/magazine/exhibitions/i-maintain-my-joy">"I Maintain My Joy": The Life and Ministry of Watchman Nee</a></li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<Copyright />
			</div>
		);
	}
}

export default Bible;
