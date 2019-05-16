import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
	render() {
		return (
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/vision">Vision</NavLink>
				<NavLink to="/about">About Us</NavLink>
				<NavLink to="/project">Featured Projects</NavLink>
				<NavLink to="/publication">Publications</NavLink>
				<NavLink to="/support">Support ARC</NavLink>
			</div>
		);
	}
}

export default Navigation;
