import React, { Component } from 'react';
import './VisionImages.css';

class VisionImages extends Component {
	render() {
		return (
			<div>
				<img
					style={{ width: '100%' }}
					src={require('../assets/images/ourVision.jpg')}
					alt=''
				/>
			</div>
		);
	}
}

export default VisionImages;