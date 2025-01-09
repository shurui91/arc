import React from 'react';
import './Copyright.css';

const Copyright = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="copyright">
			<p>&copy; {currentYear} ARC. All Rights Reserved</p>
		</div>
	);
};

export default Copyright;
