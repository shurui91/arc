import React, { Component } from 'react';
import './Korea.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import KoreaCarousel from './KoreaCarousel';
import Copyright from '../Copyright';

class Korea extends Component {
	render() {
		return (
			<div>
				<div className='orthodoxy'>
					<h1>
						The Identity of EL (Almighty God) and Counterstrategy
					</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<KoreaCarousel />
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

export default Korea;
