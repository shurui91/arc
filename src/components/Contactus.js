import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import './Contactus.css';


class Contactus extends Component {
	render() {
		return (
			<div className="contactForm">
				<Form>
					<Form.Group controlId="formBasicName">
						<Form.Label>Your Name</Form.Label>
						<Form.Control type="text" placeholder="Enter your name" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
    					</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
    					</Form.Text>
					</Form.Group>
					
					<Form.Group controlId="formBasicPhone">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control type="phone" placeholder="Enter phone number" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
    					</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicMsg">
						<Form.Label>Your Message</Form.Label>
						<Form.Control type="text" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default Contactus;