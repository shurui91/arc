import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='footerContent'>
					<p
						style={{
							color: 'white',
							fontSize: '21px',
							textAlign: 'justify',
						}}>
						"A center to promote a better understanding of Asia’s
						rich cultures, languages and religions and how they
						integrate into a diverse global environment.​"
						​Information—to Enrich​-​Interaction—to
						Exchange​-​Instruction—to Equip
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
