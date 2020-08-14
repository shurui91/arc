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
						<Col class='column' md={12} lg={4}>
							<p class='contactTitle'>CONTACT US</p>
							<ul class='footerList'>
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
						<Col class='column' md={12} lg={4}>
							<p class='contactTitle'>STAY CONNECTED</p>
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
						<Col class='column' md={12} lg={4}>
							<p class='contactTitle'>PARTNERS</p>
							<img
								style={{ width: '100%' }}
								src={require('../assets/images/OCMDlogo2color.png')}
								alt=''
							/>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Footer;
