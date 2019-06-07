import React, { Component } from 'react';
import './Bibletext.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import BibleCarousel from './BibleCarousel';
import Footer from '../Footer';

class Bibletext extends Component {
	render() {
		return (
			<div>
				<div className="bibletext">
					<h1>Dead Sea Scrolls Exhibition</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<BibleCarousel />
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

export default Bibletext;
