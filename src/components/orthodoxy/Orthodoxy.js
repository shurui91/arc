import React, { Component } from 'react';
import './Orthodoxy.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import OrthodoxyCarousel from './OrthodoxyCarousel';
import Footer from '../Footer';

class Orthodoxy extends Component {
	render() {
		return (
			<div>
				<div className="orthodoxy">
					<h1>The Orthodoxy Seminar in Hong Kong</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<OrthodoxyCarousel />
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={5}>
								<p style={{ paddingTop: '20px' }}>
									The Orthodoxy of the Chinese Church from a Historical, Theological and Apologetic
									Perspec­tive, a seminar in Hong Kong
								</p>
							</Col>
						</Row>
					</Container>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Orthodoxy;
