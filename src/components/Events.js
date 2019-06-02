import React, { Component } from 'react';
import './Events.css';

class Events extends Component {
	render() {
		return (
			<div>
				<img src={require("../events.jpg")} style={{ width: '100%' }} alt="" />
			</div>
		);
	}
}

export default Events;
