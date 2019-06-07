import React, { Component } from 'react';
import PartnerImages from './PartnerImages';
import './Partners.css';

class Partners extends Component {
	render() {
		return (
			<div className="partners">
				<div className="content">
                    <p>Our Partner - Orange County Music and Dance</p>
                </div>
				<PartnerImages />
			</div>
		);
	}
}

export default Partners;