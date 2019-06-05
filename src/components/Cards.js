import React, { Component } from 'react';
import './Cards.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Cards extends Component {
	render() {
		return (
			<div className="cards">
				<Container>
					<Row>
						<Col md={12} lg={4} className="card">
							<Link to="/contactus">
								<Card style={{ maxWidth: '300px' }}>
									<Card.Img
										variant="top"
										src={require('../img5.jpg')}
										style={{ width: '100%', height: '83%' }}
									/>
									<Card.Body>
										<Card.Title>Contact Us</Card.Title>
										{/*<Card.Text>
											Some quick example text to build on the card title and make up the bulk of the
											card's content.
										</Card.Text>*/}
										{/* <Button variant="primary">Go somewhere</Button> */}
									</Card.Body>
								</Card>
							</Link>
						</Col>
						<Col md={12} lg={4} className="card">
							<Link to="/news">
								<Card style={{ maxWidth: '300px' }}>
									<Card.Img
										variant="top"
										src={require('../zhangx300.jpg')}
										style={{ width: '100%', height: '83%' }}
									/>
									<Card.Body>
										<Card.Title>About Us</Card.Title>
										{/*<Card.Text>
											Some quick example text to build on the card title and make up the bulk of the
											card's content.
										</Card.Text>*/}
										{/* <Button variant="primary">Go somewhere</Button> */}
									</Card.Body>
								</Card>
							</Link>
						</Col>
						<Col md={12} lg={4} className="card">
							<Link to="/events">
								<Card style={{ maxWidth: '300px' }}>
									<Card.Img
										variant="top"
										src={require('../events.jpg')}
										style={{ width: '100%', height: '83%' }}
									/>
									<Card.Body>
										<Card.Title>Events</Card.Title>
										{/*<Card.Text>
											Some quick example text to build on the card title and make up the bulk of the
											card's content.
										</Card.Text>*/}
										{/* <Button variant="primary">Go somewhere</Button> */}
									</Card.Body>
								</Card>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Cards;
