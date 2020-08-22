import React, { Component, cloneElement } from 'react';
import './Footer.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='footerContent'>
					<Row className='row'>
						<Col className='column' md={12} lg={4}>
							<p className='contactTitle'>CONTACT US</p>
							<ul className='footerList'>
								<li>
									<FontAwesomeIcon
										icon={faPhoneAlt}
										size='lg'
									/>
									<span>&nbsp;562-555-1234</span>
								</li>
								<li>
									<FontAwesomeIcon
										icon={faEnvelope}
										size='lg'
									/>
									<span>
										&nbsp;contactus@asiaresearchcenter.org
									</span>
								</li>
								<li>
									<FontAwesomeIcon
										icon={faMapMarkerAlt}
										size='lg'
									/>
									<span>
										&nbsp;13615 Del Amo Blvd, Cerritos, CA
										90703
									</span>
								</li>
							</ul>
						</Col>
						<Col className='column' md={12} lg={4}>
							<p className='contactTitle'>STAY CONNECTED</p>
							<p>
								<span>
									<FontAwesomeIcon
										icon={faFacebook}
										size='lg'
									/>
								</span>
								<span>
									&nbsp;&nbsp;&nbsp;&nbsp;
									<FontAwesomeIcon
										icon={faTwitter}
										size='lg'
									/>
								</span>
								<span>
									&nbsp;&nbsp;&nbsp;&nbsp;
									<FontAwesomeIcon
										icon={faInstagram}
										size='lg'
									/>
								</span>
							</p>
						</Col>
						<Col className='column' md={12} lg={4}>
							<p className='contactTitle'>PARTNERS</p>
							<Row>
								<Col className='d-flex align-items-center'>
									<img
										style={{
											width: '100%',
										}}
										src={require('../assets/images/20200821224340.png')}
										alt=''
									/>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Footer;
