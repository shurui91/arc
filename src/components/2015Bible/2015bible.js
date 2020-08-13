import React, { Component } from 'react';
import './2015bible.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import BibleCarousel from './2015Carousel';
import Copyright from '../Copyright';

class Bible extends Component {
	render() {
		return (
			<div>
				<div className='bible'>
					<h1>2015《圣经》与文学阐释国际学术研讨会</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<BibleCarousel />
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={5}>
								<div style={{ textAlign: 'center' }}>
									<Link to='/events'>
										<Button type='button'>Back</Button>
									</Link>
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
