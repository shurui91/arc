import React, { Component } from 'react';
// import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './Cards.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

class Cards extends Component {
	render() {
		return (
			<div className="cards">
				<Container>
					<Row>
						<Col xs={12} md={4}>
							<Card style={{ width: '22rem' }}>
								<Card.Img
									variant="top"
									src={require('../img5.jpg')}
									style={{ width: '350px', height: '250px' }}
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
						<Col xs={12} md={4}>
							<Card style={{ width: '22rem' }}>
								<Card.Img
									variant="top"
									src={require('../zhangx220.jpg')}
									style={{ width: '350px', height: '250px' }} />
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
						<Col xs={12} md={4}>
							<Card style={{ width: '22rem' }}>
								<Card.Img
									variant="top"
									src={require('../events.jpg')}
									style={{ width: '350px', height: '250px' }} />
								<Card.Body>
									<Card.Title>Who We Are</Card.Title>
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
