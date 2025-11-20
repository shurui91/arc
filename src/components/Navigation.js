import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="/">
						<img src={require('../arcLogo.jpg')} height="85px" width="270px" alt="" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<link to="/">Home</link>
							</li>
							<li className="nav-item">
								<NavLink to="/vision">Vision</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about">About Us</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/project">Featured Projects</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/publication">Publications</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/support">Support ARC</NavLink>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
								Search
							</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;
