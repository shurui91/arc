import React, { Component } from 'react';
import './Isaiah.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import IsaiahCarousel from './IsaiahCarousel';
import Copyright from '../Copyright';

class Fudan extends Component {
	render() {
		return (
			<div>
				<div className='fudan'>
					<h1>The Great Isaiah Scroll</h1>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12} lg={12} xl={7}>
								<IsaiahCarousel />
							</Col>
							<Col xs={12} sm={12} md={12} lg={12} xl={5}>
								<p style={{ paddingTop: '20px' }}>
									In the field of biblical studies, the
									textual criticism of the Hebrew Scriptures
									is mostly ignored in Chinese scholarly
									circles. This paper gives a quantitative
									study of the two prominent Hebrew texts, and
									provides an accurate comparison between the
									Great Isaiah Scroll in the Dead Sea Scrolls
									and the Masoretic text.
								</p>
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

export default Fudan;
