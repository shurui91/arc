import React, { Component } from 'react';
import './PartnerImages.css';
import { Container, Row, Col } from 'react-bootstrap';

class PartnerImages extends Component {
	render() {
		return (
			<div className="partnersImage">
				<Row>
					<Col sm={12}>
						<img style={{ width: '100%' }} src={require('../20190529214043.jpg')} alt="" />
					</Col>
				</Row>
			</div>
		);
	}
}

export default PartnerImages;
