import React, { Component } from 'react';
import './Cards.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

class Cards extends Component {
	render() {
		return (
			<div className="cards">
				<Container>
					<Row>
						<Col sm={12} xl={4} className="card">
							<Card style={{ width: '20rem' }}>
								<Card.Img
									variant="top"
									src={require('../img5.jpg')}
									style={{ width: '100%', height: '250px' }}
								/>
								<Card.Body>
									<Card.Title>Contact Us</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
								</Card.Text>
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} xl={4} className="card">
							<Card style={{ width: '20rem' }}>
								<Card.Img
									variant="top"
									src={require('../zhangx220.jpg')}
									style={{ width: '100%', height: '250px' }} />
								<Card.Body>
									<Card.Title>About Us</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
								</Card.Text>
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} xl={4} className="card">
							<Card style={{ width: '20rem' }}>
								<Card.Img
									variant="top"
									src={require('../events.jpg')}
									style={{ width: '100%', height: '250px' }} />
								<Card.Body>
									<Card.Title>Events</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
								</Card.Text>
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Cards;
