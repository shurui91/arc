import React, { Component } from 'react';
import './Events.css';
import AliceCarousel from 'react-alice-carousel';

class Events extends Component {
	render() {
		return (
			<div>
				<img src={require("../events.jpg")} style={{ width: '100%' }} alt="" />
				<AliceCarousel>
					<img src={require("../events/event1/20190602071054.jpg")} style={{ width: '100%' }} alt="" />
					<img src={require("../events/event1/20190602071106.jpg")} style={{ width: '100%' }} alt="" />
					<img src={require("../events/event1/20190602071113.jpg")} style={{ width: '100%' }} alt="" />
					<img src={require("../events/event1/20190602071120.jpg")} style={{ width: '100%' }} alt="" />
					<img src={require("../events/event1/20190602071251.jpg")} style={{ width: '100%' }} alt="" />
				</AliceCarousel>
			</div>
		);
	}
}

export default Events;
