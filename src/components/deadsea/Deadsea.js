import React, { Component } from 'react';
import './Deadsea.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import DeadseaCarousel from './DeadseaCarousel';
import Footer from '../Footer';

class Stockholm extends Component {
	render() {
		return (
			<div>
				<div className="stockholm">
					<h1>Dead Sea Scrolls Exhibition</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<DeadseaCarousel />
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={5}>
								<p style={{ paddingTop: '20px' }}>An International Exhibit and Seminar</p>
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
