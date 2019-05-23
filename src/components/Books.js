import React, { Component } from "react";
import "./Books.css";
import Footer from "./Footer";

class Books extends Component {
	render() {
		return (
			<div>
				<div className="books">
					<h2>Publications</h2>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Books;
