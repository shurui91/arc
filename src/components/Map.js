import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
	render() {
		return (
			<map className="theMap">
				<img src={require('../united-states-map.jpg')} alt="" />
			</map>
		);
	}
}

export default Map;
