import React, { Component } from 'react';
import './Localize.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import LocalizeCarousel from './LocalizeCarousel';
import Copyright from '../Copyright';

class Localize extends Component {
	render() {
		return (
			<div>
				<div className='localize'>
					<h1>多学科视野下的中国基督教本土化研究学术研讨会</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<LocalizeCarousel />
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

export default Localize;
