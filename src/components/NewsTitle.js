import React, { Component } from 'react';
import './NewsTitle.css';

class NewsTitle extends Component {
	constructor(props) {
		super(props);
		this.state = { year: new Date().getFullYear() };
	}

	render() {
		return (
			<newstitle className="newstitle">
				<p>Featured Projects & Past Events</p>
			</newstitle>
		);
	}
}

export default NewsTitle;
