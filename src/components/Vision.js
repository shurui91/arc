import React, { Component } from 'react';
import VisionImages from './VisionImages';
import './Vision.css';

class Vision extends Component {
	render() {
		return (
			<div className='vision'>
				<div className='visionContent'>
					<VisionImages />
				</div>
			</div>
		);
	}
}

export default Vision;
