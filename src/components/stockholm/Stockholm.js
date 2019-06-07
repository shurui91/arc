import React, { Component } from 'react';
import './Stockholm.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import StockholmCarousel from './StockholmCarousel';
import Footer from '../Footer';

class Stockholm extends Component {
	render() {
		return (
			<div>
				<div className="stockholm">
					<h1>Sinicization of Christianity in China</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<StockholmCarousel />
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={5}>
								<p style={{ paddingTop: '20px' }}>
									Organized by the Fudan-European Centre for China Studies, UCPH and the Asia Research
									Center and Center on Globalization and Religious Studies, Fudan University
								</p>
								<div style={{ textAlign: 'center' }}>
									<Link to="/events">
										<Button type="button">Back</Button>
									</Link>
								</div>
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
