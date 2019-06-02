import React, { Component } from 'react';
import './News.css';
import { Media } from 'react-bootstrap';

class News extends Component {
	render() {
		return (
			<div className="news">
				<h3>Philanthropic</h3>
				<Media>
					<img
						width={64}
						height={64}
						className="mr-3"
						src={require('../neco.jpg')}
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5>Ellis Island Medal of Honor</h5>
						<p>ARC Founder Charlie Zhang was the recent receipient of coveted Ellis</p>
						<p>
							The award pays homage to major contributions by American immigrants to the United States.
							The Ellis Island Medals of Honor, and its recipients are read into the Congressional Record.
						</p>
						<p>
							Past medalists include six Presidents, as well as Nobel Prize winners and leaders of
							industry, education, the arts, sports and government. ARC and its members are dedicated to
							the spreading of knowledge, education, charitible contributions, benevolent public policy
							and economic growth.
						</p>
					</Media.Body>
				</Media>
				<hr sm="12" />
				<Media>
					<Media.Body>
						<h5>ARC Roles</h5>
						<p>
							ARC directives are to compile, syntheize and analyze international issues​ ​in areas of
							commerce, religion, government, policy and philapthropic​ ​areas. The coverage and awareness
							of these issues can help to provide a​ ​clearer picture as well as insight for stakeholders
							both in Asia and the​ ​United States. ARC believes Multilateral cooperation and good will
							comes​ ​from research and relationship based mutual understanding.
						</p>
					</Media.Body>
				</Media>
				<hr sm="12" />
				<Media>
					<img
						width={64}
						height={64}
						className="mr-3"
						src={require('../fudan.jpg')}
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5>Asia Youth And Education</h5>
						<p>
							ARC is very active in their financial sponsorship and advisory support to institutions such
							as the New Century International College in Jiangsu. The goal of ARCs involvement in this
							and other youth and educational insitutions, is to widen the cultural and educational bridge
							between Asia and the United States.
						</p>
					</Media.Body>
				</Media>
				<hr sm="12" />
				<Media>
					<img
						width={64}
						height={64}
						className="mr-3"
						src={require('../pacific.jpg')}
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5>Pacific Symphony</h5>
						<p>
							"Charlie Zhang has been on the Board of Directors for the Pacific Symphony of Orange County,
							his involvement includes financial contributions, working with the students and countless
							hours of mentorship. Most recently Charlie will be hosting a trip for 100 of the youth
							orchestra students on a trip to Asia to gain a further understanding of the cultural, social
							and religious environment in Asia, to foster music appreciation and greater cultural
							understanding for the next generation of United State and Chinese leaders.
						</p>
					</Media.Body>
				</Media>
				<hr sm="12" />
				<Media>
					<img
						width={64}
						height={64}
						className="mr-3"
						src={require('../tedx.jpg')}
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5>TED X</h5>
						<p>
							ARC founder Charles Zhang was recently featured as a speaker in the internationally renoun
							TEDX, his speech was given at La Sierra University and is spreading throughout the internet.
							This heartfelt presentation is directed toward anyone seeking to grow and advance in what is
							often challenging conditions. "The Power of One Moment" -- this message proves that anything
							is possible when one can take the best of both Eastern and Western cultures.
						</p>
						<p>
							His story is an inspiration to many Asian youth who will follow in his footsteps and gives
							students and citizens alike a chance to see what it takes to make it in this country.
							Getting a clearer picture of what citizens in the United States and abroad want is important
							for policymakers, because public attitudes will shape prospects for effective multilateral
							cooperation in the twenty-first century.
						</p>
					</Media.Body>
				</Media>
				<hr sm="12" />
			</div>
		);
	}
}

export default News;
