import React, { Component } from 'react';
import './Stockholm.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Carousel from '../Carousel';
import Footer from '../Footer';

class Stockholm extends Component {
	render() {
		return (
			<div>
				<div className="stockholm">
					<h1>Sinicization of Christianity in China</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={6}>
								<Carousel />
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={6}>
								<h3>
									Organized by the Fudan-European Centre for China Studies, UCPH and the Asia Research
									Center and Center on Globalization and Religious Studies, Fudan University
								</h3>
							</Col>
						</Row>
					</Container>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Stockholm;
