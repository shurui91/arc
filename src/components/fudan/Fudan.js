import React, { Component } from 'react';
import './Fudan.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import FudanCarousel from './FudanCarousel';
import Footer from '../Footer';

class Fudan extends Component {
	render() {
		return (
			<div>
				<div className="fudan">
					<h1>ARC event with Fudan university at UCSD</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<FudanCarousel />
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={5}>
								<p style={{ paddingTop: '20px' }}>
									One of the many interests and goals of ARC is building relationships, funding and
									mentoring for scholars, students and those seeking a greater eduction both in the
									East and the West.
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

export default Fudan;
